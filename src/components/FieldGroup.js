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
  onChange,
  onBlur,
  controlId
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        name={name}
        defaultValue={value}
        onChange={onChange}
        isInvalid={!valid}
        onBlur={onBlur}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export const UrlField = (props) => {
    console.log("Props:", props)
    const {
        name,
        label,
        value,
        error,
        valid,
        onChange,
        onBlur,
        controlId
    } = props;
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="url"
                name={name}
                defaultValue={value}
                onChange={onChange}
                isInvalid={!valid}
                onBlur={onBlur}
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
  onChange,
  onBlur,
  controlId
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="email"
        name={name}
        defaultValue={value}
        onChange={onChange}
        isInvalid={!valid}
        onBlur={onBlur}
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
  onChange,
  onBlur,
  controlId
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={!valid}
        onBlur={onBlur}
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
  onChange,
  onBlur,
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
    onChange(event, newDate);
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
        onBlur={onBlur}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};
