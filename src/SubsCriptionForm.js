import React from "react";
import { useFormik } from "formik";


const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 20) {
    errors.name = "Name should be less than 15 charactors";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Enter a Valid Email";
  }
  return errors;
};

const SubsCriptionForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    validate,
    onSubmit: values => {
      console.log(values.name);
      console.log(values.email);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="App">
        <h2 className="App-header">Subscriptoin Form</h2>

        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? 
          <div>{formik.errors.name}</div> : null}
        </div>
        <br/>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="your name"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email ? 
          <div>{formik.errors.email}</div> : null}
        <br/>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SubsCriptionForm;
