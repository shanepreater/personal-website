import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TextField = ({
  name,
  label,
  value,
  error,
  valid,
  handleChange,
  handleBlur,
  controlId
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        name={name}
        defaultValue={value}
        onChange={handleChange}
        isInvalid={!valid}
        onBlur={handleBlur}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export const EmailField = ({
  name,
  label,
  value,
  error,
  valid,
  handleChange,
  handleBlur,
  controlId
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="email"
        name={name}
        defaultValue={value}
        onChange={handleChange}
        isInvalid={!valid}
        onBlur={handleBlur}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export const TextAreaField = ({
  name,
  label,
  value,
  error,
  valid,
  handleChange,
  handleBlur,
  controlId
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        name={name}
        value={value}
        onChange={handleChange}
        isInvalid={!valid}
        onBlur={handleBlur}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export const DateField = ({
  name,
  label,
  value,
  error,
  valid,
  handleChange,
  handleBlur,
  controlId
}) => {
  let className = "form-control";
  if (!valid) {
    className += ":invalid";
  }
  const handleDateChange = newDate => {
    const event = {
      target: {
        name,
        value: newDate
      }
    };
    handleChange(event, newDate);
  };

  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <br />
      <Form.Control
        className={className}
        as={DatePicker}
        name={name}
        selected={value}
        onChange={handleDateChange}
        isInvalid={!valid}
        onBlur={handleBlur}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};
