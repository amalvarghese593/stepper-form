import React from "react";
import { useWizard } from "../ui/wizard/wizard-context";
import Form from "./Form";

export const Personal = () => {
  const { formik } = useWizard();

  return (
    <div>
      <h2>Personal</h2>
      <div className="name-container">
        <Form.Input
          type="text"
          name="firstName"
          placeholder="First Name"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
        />
        <Form.Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.lastName}
          touched={formik.touched.lastName}
        />
      </div>
      {/* <Form.DatePicker
        name="dob"
        placeholder="DD/MM/YYYY"
        label="Date of Birth"
        formik={formik}
      /> */}
      <Form.Input
        type="email"
        name="email"
        placeholder="Email Address"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <Form.Input
        type="text"
        name="address"
        placeholder="Address"
        label="Address"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.address}
        touched={formik.touched.address}
      />
    </div>
  );
};
