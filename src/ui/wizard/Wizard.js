import React, { useEffect, useCallback, useState } from "react";
import { Stepper } from "../../components/Stepper";
import { useWizard, WizardContext } from "./wizard-context";
import { Formik, Form, useFormik } from "formik";

function Wizard({
  children,
  steps,
  validation,
  initialValues,
  orientation: defaultOrientation,
}) {
  // const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(1);

  const [isCompleted, setIsCompleted] = useState({});
  const totalPages = steps.length;
  const [orientation, setOrientation] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setOrientation("vertical");
      } else {
        setOrientation("horizontal");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextButtonHandler = useCallback(
    (values, bag) => {
      if (step === totalPages) {
        setIsCompleted((prev) => ({ ...prev, [step - 1]: true }));
        alert("Final Submit");
      }
      if (step < totalPages) {
        setStep((prev) => prev + 1);
        setIsCompleted((prev) => ({ ...prev, [step - 1]: true }));
        bag.setTouched({});
        bag.setSubmitting(false);
      }
    },
    [step]
  );

  const formik = useFormik({
    initialValues,
    validationSchema: validation[step - 1],
    validateOnMount: true,
    onSubmit: nextButtonHandler,
  });
  const prevButtonHandler = useCallback(() => {
    setStep((prev) => prev - 1);
    formik.setErrors({});
  }, []);

  useEffect(() => {
    formik.validateForm();
  }, [step]);

  //context state
  const contextValue = {
    step,
    setStep,
    steps,
    totalPages,
    formik,
    validation,
    prevButtonHandler,
    isCompleted,
    setIsCompleted,
    orientation: defaultOrientation || orientation,
  };

  return (
    <WizardContext.Provider value={contextValue}>
      <form onSubmit={formik.handleSubmit} className="stepper-form">
        {/* {childrenArray[0].props.children[step - 1]} */}
        {children}
      </form>
    </WizardContext.Provider>
  );
}

export default Wizard;

const Step = ({ children }) => {
  const { formik, step, steps, totalPages, prevButtonHandler, isCompleted } =
    useWizard();

  return (
    <>
      <div className="step-container-wrapper">
        {/* <Stepper>
        {steps.map((el, index) => {
          return (
            <div key={el} className="stepper-container">
              {isCompleted[index] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="#06c"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              ) : (
                <span
                  className="step-value"
                  style={{
                    backgroundColor: step === index + 1 ? "#0c74ff" : "#f9f9fb",
                    color: step === index + 1 ? "#fff" : "#000",
                  }}
                >
                  {index + 1}
                </span>
              )}
              <button type="button" className="step-button">
                {el}
              </button>
            </div>
          );
        })}
      </Stepper> */}
        {/* <div className="horizontal-divider"></div> */}
        <div className="form-btn-wrapper">
          <section className="step-section">{children}</section>
          {/* <div className="horizontal-divider"></div> */}
          <div className="button-container">
            {step !== 1 && (
              <button
                type="button"
                onClick={prevButtonHandler}
                className="btn btn-light border border-dark me-3"
              >
                Previous
              </button>
            )}
            {step !== totalPages ? (
              <button
                type="button"
                onClick={formik.isValid ? formik.handleSubmit : () => {}}
                className="btn btn-primary"
                disabled={!formik.isValid}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                onClick={formik.isValid ? formik.handleSubmit : () => {}}
                disabled={!formik.isValid}
                className="btn btn-primary"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
      {/* {orientation === "vertical" && (
        <div className="horizontal-divider"></div>
      )} */}
    </>
  );
};
Wizard.Step = Step;
