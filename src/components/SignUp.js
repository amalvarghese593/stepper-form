import React from "react";
import Wizard from "../ui/wizard/Wizard";
import { Education } from "./Education";
import { Personal } from "./Personal";
import { Professional } from "./Professional";
import "./signup.css";
import { StepperLatest } from "./StepperLatest";
import * as Yup from "yup";

export const SignUp = () => {
  const steps = ["Personal", "Education", "Professional"];
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    graduation: "",
    gradSpecialisation: "",
    currentCompanyName: "",
    currentDesignation: "",
  };
  const page1Validation = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    address: Yup.string()
      .min(10, "Min 10 characters required")
      .required("Required"),
  });
  const page2Validation = Yup.object().shape({
    graduation: Yup.string().required("Required"),
    gradSpecialisation: Yup.string().required("Required"),
  });
  const page3Validation = Yup.object().shape({
    currentCompanyName: Yup.string().required("Required"),
    currentDesignation: Yup.string().required("Required"),
  });
  const validation = [page1Validation, page2Validation, page3Validation];

  return (
    <div className="signup-wrapper">
      <div className="form-wrapper">
        <div className="image-container">
          <img src="signup.png" alt="signup image" />
        </div>
        <div className="content-container">
          <Wizard
            steps={steps}
            initialValues={initialValues}
            validation={validation}
            orientation="horizontal"
          >
            <StepperLatest>
              <Wizard.Step>
                <Personal />
              </Wizard.Step>
              <Wizard.Step>
                <Education />
              </Wizard.Step>
              <Wizard.Step>
                <Professional />
              </Wizard.Step>
            </StepperLatest>
          </Wizard>
        </div>
      </div>
    </div>
  );
};
