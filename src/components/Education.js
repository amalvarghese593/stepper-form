import React from "react";
import Form from "./Form";
import { useWizard } from "../ui/wizard/wizard-context";

export const Education = () => {
  const { formik } = useWizard();
  return (
    <div>
      <h2 className="form-heading-h2">Education</h2>
      <Form.Input
        type="text"
        name="graduation"
        placeholder="Graduation"
        value={formik.values.graduation}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.graduation}
        touched={formik.touched.graduation}
      />
      <Form.Input
        type="text"
        name="gradSpecialisation"
        placeholder="Specialisation"
        value={formik.values.gradSpecialisation}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.gradSpecialisation}
        touched={formik.touched.gradSpecialisation}
      />
    </div>
  );
};
