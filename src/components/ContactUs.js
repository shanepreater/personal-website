import React from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {Formik} from "formik";
import {EmailField, TextAreaField, TextField} from "./FieldGroup";
import * as yup from "yup"

const formSchema = yup.object().shape({
    email: yup.string().email().required(),
    subject: yup.string().required(),
    content: yup.string().required()
});

const ContactUs = ({show, setShow}) => {
    const sendContactRequest = (values, {setSubmitting}) => {
        console.log("Feedback submission requested.");
        setShow(false);
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Disclaimers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik initialValues={{email: ""}}
                        onSubmit={sendContactRequest}
                        validationSchema={formSchema}>
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
                                <EmailField name="email"
                                            label="Reply Email"
                                            controlId="validationEmail"
                                            error={errors.email}
                                            valid={touched.email && !errors.email}
                                            handleChange={handleChange}
                                            value={values.email}
                                            handleBlur={handleBlur}/>
                                <TextField name="subject"
                                           label="Subject"
                                           controlId="validationSubject"
                                           error={errors.subject}
                                           valid={touched.subject && !errors.subject}
                                           handleChange={handleChange}
                                           value={values.subject}
                                           handleBlur={handleBlur}/>
                                <TextAreaField name="content"
                                               label="Description"
                                               controlId="validationContent"
                                               error={errors.content}
                                               valid={touched.content && !errors.content}
                                               handleChange={handleChange}
                                               value={values.content}
                                               handleBlur={handleBlur}/>
                                <Button variant="primary" type="submit" disabled={!canSubmit}>
                                    Submit feedback
                                </Button>
                            </Form>)
                    }}
                </Formik>
            </Modal.Body>
        </Modal>
    );
};

export default ContactUs;