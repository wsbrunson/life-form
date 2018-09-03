import { Field } from "formik";
import { FormField, FormFieldError } from "../components";
import React from "react";

const InputFormField = ({ id, name, label, type = "text", errors }) => (
  <FormField>
    <label htmlFor={id}>
      {label}
      <Field id={id} name={name} type={type} className="FormField-input" />
    </label>
    <div>
      {errors.map(error => (
        <FormFieldError key={error}>{error}</FormFieldError>
      ))}
    </div>
  </FormField>
);

export default InputFormField;
