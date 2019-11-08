import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import { EmailField, TextAreaField, TextField } from "./FieldGroup";
import * as yup from "yup";
import { API, graphqlOperation } from "aws-amplify";
import { createContactRequest } from "../graphql/mutations";
import { userIdSelector } from "../authentication/AuthReducer";
import { connect } from "react-redux";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  subject: yup.string().required(),
  content: yup.string().required()
});

const ContactUs = ({
  userId,
  show,
  setShow,
  errorResponse,
  successResponse
}) => {
  const sendContactRequest = (values, { setSubmitting }) => {
    const shipIt = async () => {
      try {
        const { id, email } = await API.graphql(
          graphqlOperation(createContactRequest, {
            input: {
              ...values,
              owner: userId,
              submitted: new Date().toISOString(),
              actioned: false
            }
          })
        );
        console.log(`Contact request saved with id: ${id}`);
        successResponse(
          "Contact request received",
          `<p>Contact request for ${values.email} has been successfully registered.</p><p>Thanks very much for your interest,<br/>>Shane.</p>`
        );
      } catch (e) {
        console.error(e.errors);
        const errorList =
          "<ul>" +
          e.errors.map(e => `<li>${e.path}: ${e.message}</li>`) +
          "</ul>";
        errorResponse(
          "Contact request has failed.",
          `<p>There appears to have been a problem submitting the contact request.</p><p>Please try again later</p><h5>Errors:</h5>${errorList}`
        );
      }
      setSubmitting(false);
      setShow(false);
    };
    shipIt();
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={sendContactRequest}
          validationSchema={formSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
            isSubmitting
          }) => {
            const canSubmit = isValid && !isSubmitting && touched;
            return (
              <Form noValidate onSubmit={handleSubmit}>
                <EmailField
                  name="email"
                  label="Reply Email"
                  controlId="validationEmail"
                  error={errors.email}
                  valid={touched.email && !errors.email}
                  handleChange={handleChange}
                  value={values.email}
                  handleBlur={handleBlur}
                />
                <TextField
                  name="subject"
                  label="Subject"
                  controlId="validationSubject"
                  error={errors.subject}
                  valid={touched.subject && !errors.subject}
                  handleChange={handleChange}
                  value={values.subject}
                  handleBlur={handleBlur}
                />
                <TextAreaField
                  name="content"
                  label="Description"
                  controlId="validationContent"
                  error={errors.content}
                  valid={touched.content && !errors.content}
                  handleChange={handleChange}
                  value={values.content}
                  handleBlur={handleBlur}
                />
                <Button variant="primary" type="submit" disabled={!canSubmit}>
                  Submit feedback
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = state => ({
  userId: userIdSelector(state)
});

const mapDispatchToProps = dispatch => ({
  errorResponse: (title, message) => {
    console.log("Dispatching error: ");
    console.log(message);
    dispatch({
      type: "error/received",
      title,
      message
    });
  },
  successResponse: (title, message) => {
    dispatch({
      type: "success/received",
      title,
      message
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUs);
