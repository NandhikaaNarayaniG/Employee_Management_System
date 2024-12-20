import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './Add.css';


function Add() {
  const initialValues = {
    name: "",
    employeeID: "",
    email: "",
    phone:"",
    department:"",
    dateOfJoining:"",
    role:"",

  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("You must input a name!"),
    employeeID: Yup.string().required(),
    email: Yup.string().min(3).max(25).required(),
    phone: Yup.string().required(),
    department: Yup.string().min(3).max(25).required(),
    dateOfJoining: Yup.string().required(),
    role: Yup.string().min(3).max(25).required(),
    

  });

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/employee", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div className="addPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>name: </label>
          <ErrorMessage name="name" component="span" />
          <Field
            autocomplete="off"
            id="inputAdd"
            name="name"
            placeholder="(Ex. preethi...)"
          />
          <label>employeeID: </label>
          <ErrorMessage name="employeeID" component="span" />
          <Field
            autocomplete="off"
            id="inputAdd"
            name="employeeID"
            placeholder="(Ex. EMP12345...)"
          />
          <label>email: </label>
          <ErrorMessage name="email" component="span" />
          <Field
            autocomplete="off"
            id="inputAdd"
            name="email"
            placeholder="(Ex. John@gmail.com...)"
          />
          <label>phone: </label>
          <ErrorMessage name="phone" component="span" />
          <Field
            autocomplete="off"
            id="inputAdd"
            name="phone"
            placeholder="(Ex. 8763542678...)"
          /><label>department: </label>
          <ErrorMessage name="department" component="span" />
          <Field
            autocomplete="off"
            id="inputAdd"
            name="department"
            placeholder="(Ex. Finance...)"
          /><label>dateOfJoining: </label>
          <ErrorMessage name="dateOfJoining" component="span" />
          <Field
            autocomplete="off"
            id="inputAdd"
            name="dateOfJoining"
            placeholder="(Ex. 2024-12-14...)"
          /><label>role: </label>
          <ErrorMessage name="role" component="span" />
          <Field
            autocomplete="off"
            id="inputAdd"
            name="role"
            placeholder="(Ex. analyst...)"
          />

          <button type="submit"> ADD</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Add;