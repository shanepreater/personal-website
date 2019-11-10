import React, { useCallback } from "react";
import * as yup from "yup";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { TextAreaField, TextField, UrlField } from "../components/FieldGroup";
import { createAdvertCampaign } from "../aws/awsAdverts";
import { connect } from "react-redux";

const validationSchema = yup.object().shape({
  from: yup
    .string()
    .url()
    .required(),
  to: yup
    .string()
    .url()
    .required(),
  variant: yup.string().required(),
  description: yup.string().required()
});

const CreateAdvert = ({ successResponse, errorResponse }) => {
  const onSubmit = useCallback((values, { setSubmitting }) => {
    createAdvertCampaign(values, setSubmitting, successResponse, errorResponse);
  });

  const formik = useFormik({
    initialValues: { from: "", variant: "", description: "" },
    validationSchema,
    onSubmit
  });

  const canSubmit = formik.isValid && !formik.isSubmitting && formik.touched;

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <UrlField
        error={formik.errors.from}
        label="From"
        {...formik.getFieldProps("from")}
      />
      <UrlField
        error={formik.errors.from}
        label="To"
        {...formik.getFieldProps("to")}
      />
      <TextField
        error={formik.errors.variant}
        label="Variant"
        {...formik.getFieldProps("variant")}
      />
      <TextAreaField
        error={formik.errors.description}
        label="Description"
        {...formik.getFieldProps("description")}
      />
      <Form.Group controlId="buttonControls">
        <Button variant="secondary" onClick={formik.handleReset}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" disabled={!canSubmit}>
          Create Advert
        </Button>
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = state => ({});

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
)(CreateAdvert);
