import React from "react";
import Form from "./Form";
import { useWizard } from "../ui/wizard/wizard-context";

export const Professional = () => {
  const { formik } = useWizard();
  return (
    <div>
      <h2 className="form-heading-h2">Professional</h2>
      <Form.Input
        type="text"
        name="currentCompanyName"
        placeholder="Current Company"
        value={formik.values.currentCompanyName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.currentCompanyName}
        touched={formik.touched.currentCompanyName}
      />
      <Form.Input
        type="text"
        name="currentDesignation"
        placeholder="Current Designation"
        value={formik.values.currentDesignation}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.currentDesignation}
        touched={formik.touched.currentDesignation}
      />
    </div>
  );
};
