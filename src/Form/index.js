import "./Form.css";
import { Button } from "../components";
import { Formik } from "formik";
import { navigate } from "@reach/router";
import CheckboxFormField from "./CheckboxFormField";
import InputFormField from "./InputFormField";
import React from "react";
import styled from "react-emotion";

const getErrors = (errors, submitCount, name) =>
  submitCount > 0 && errors[name] && errors[name].length ? errors[name] : [];

const FormContainer = styled.form`
  display: flex;
  width: 33%;
  margin-left: 33%;
  flex-direction: column;
  border: solid 2px rgb(31, 31, 33);
  margin-bottom: 2rem;
`;
const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const FormSubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: rgb(31, 31, 33);
`;

const Form = ({ addData }) => (
  <Formik
    initialValues={{ weight: 0, floss: { morning: false, night: false } }}
    onSubmit={values => {
      addData(values);
      navigate("/");
    }}
  >
    {({
      values,
      handleChange,
      handleSubmit,
      errors,
      touched,
      submitCount,
      isValid
    }) => (
      <FormContainer onSubmit={handleSubmit}>
        <FormFields>
          <InputFormField
            id="weight-field"
            name="weight"
            label="Weight"
            type="number"
            errors={getErrors(errors, submitCount, "weight")}
          />
          <fieldset>
            <legend>Floss</legend>
            <CheckboxFormField
              id="floss-morning"
              type="checkbox"
              name="floss.morning"
              label="Morning"
            />
            <CheckboxFormField
              id="floss-night"
              type="checkbox"
              name="floss.night"
              label="Night"
            />
          </fieldset>
          <fieldset>
            <legend>Brush</legend>
            <CheckboxFormField
              id="brush-morning"
              type="checkbox"
              name="brush.morning"
              label="Morning"
            />
            <CheckboxFormField
              id="brush-night"
              type="checkbox"
              name="brush.night"
              label="Night"
            />
          </fieldset>
        </FormFields>
        <FormSubmitContainer>
          <Button type="submit">Submit</Button>
        </FormSubmitContainer>
      </FormContainer>
    )}
  </Formik>
);

export default Form;
