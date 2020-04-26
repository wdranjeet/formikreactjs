import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const SubsCriptionForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
            .required('Required')
            .max(15, 'Name should be not be greater than 15 characters'),

      email: Yup.string()
            .required("Required")
            .email('Invalid Email Address'),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values))
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="App">
        <h2 className="App-header">Subscriptoin Form</h2>

        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            placeholder="your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            placeholder="your name"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <br />
        {formik.values.name && formik.values.email ? (<div>{ JSON.stringify(formik.values)}</div>) : null}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SubsCriptionForm;
