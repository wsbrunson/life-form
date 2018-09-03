import { Field } from "formik";
import { FormField } from "../components";
import React from "react";

const CheckboxFormField = ({ id, name, label }) => (
  <FormField>
    <label className="FormField-checkboxLabel" htmlFor={id}>
      <Field
        type="checkbox"
        id={id}
        name={name}
        className="FormField-checkbox"
      />
      {label}
    </label>
  </FormField>
);

export default CheckboxFormField;
