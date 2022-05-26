import React, { useEffect } from "react";
import * as Yup from "yup";
import Wizard from "../ui/wizard/Wizard";
import { Education } from "./Education";
import { Personal } from "./Personal";
import { Professional } from "./Professional";
import "./signup.css";

export const SignUp = () => {
  const steps = ["Personal", "Education", "Professional"];
  //formik
  const initialValues = {
    firstName: "",
    lastName: "",
    // dob: null,
    email: "",
    address: "",
    graduation: "",
    gradSpecialisation: "",
    // gradYOP: "",
    // gradPercentage: "",
    // gradUniName: "",
    // gradCollegeName: "",
    currentCompanyName: "",
    currentDesignation: "",
  };
  const page1Validation = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    // dob: Yup.date().required("Required").nullable(),
    email: Yup.string().email("Invalid Email").required("Required"),
    address: Yup.string()
      .min(10, "Min 10 characters required")
      .required("Required"),
  });
  const page2Validation = Yup.object().shape({
    graduation: Yup.string().required("Required"),
    gradSpecialisation: Yup.string().required("Required"),
    // gradYOP: Yup.string().required("Required"),
    // gradPercentage: Yup.number().required("Required"),
    // gradUniName: Yup.string().required("Required"),
    // gradCollegeName: Yup.string().required("Required"),
  });
  const page3Validation = Yup.object().shape({
    currentCompanyName: Yup.string().required("Required"),
    currentDesignation: Yup.string().required("Required"),
  });
  const validation = [page1Validation, page2Validation, page3Validation];
  const onSubmit = (values, onSubmitProps) => {
    alert("Form submitted successfully");
  };
  return (
    <div className="signup-wrapper">
      <div className="form-wrapper">
        <div className="image-container">
          <img src="signup.png" alt="signup image" />
        </div>
        <div className="content-container">
          <Wizard
            initial={1}
            steps={steps}
            initialValues={initialValues}
            validation={validation}
            onSubmit={onSubmit}
            orientation="vertical"
          >
            <Wizard.Step>{(prop) => <Personal formik={prop} />}</Wizard.Step>
            <Wizard.Step>{(prop) => <Education formik={prop} />}</Wizard.Step>
            <Wizard.Step>
              {(prop) => <Professional formik={prop} />}
            </Wizard.Step>
          </Wizard>
        </div>
      </div>
    </div>
  );
};
