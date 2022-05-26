import React, { useState, useEffect, useCallback } from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import { Stepper } from "../../components/Stepper";

function Wizard({
  children,
  initial,
  steps,
  onSubmit,
  validation,
  initialValues,
  orientation,
}) {
  const [step, setStep] = useState(initial || 1);
  const [isCompleted, setIsCompleted] = useState({});
  const totalPages = React.Children.count(children);

  useEffect(() => {
    formik.validateForm();
  }, [step]);

  const nextButtonHandler = useCallback(
    (values, bag) => {
      // console.log({ values });
      // console.log({ bag });
      if (totalPages === step) {
        alert("Final Submit");
      }
      if (step < totalPages) {
        setStep((prev) => prev + 1);
        setIsCompleted((prev) => ({ ...prev, [step - 1]: true }));
        // setActiveStep(activeStep + 1);
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

  // console.log("values: ", formik.values);
  // console.log("errors: ", formik.errors);
  // console.log("touched: ", formik.touched);
  // console.log("formik: ", formik);

  const prevButtonHandler = useCallback(() => {
    setStep((prev) => prev - 1);
    formik.setErrors({});
  }, []);

  // useEffect(() => {}, [formik.isSubmitting, formik.errors]);
  // console.log(formik.errors, formik.touched, formik.isValid);

  //1. dont put nextbtnhandlr inside render function.it affects performance because whoever children we are passing this function to,
  //would get re-rendered whenever the parent component(ie wizard) re-renders.if we put nextbtnhandlr outside render function
  //we can call usecallback hook to prevent children getting re-rendered.
  //2. if we had used <Formik> instead of useFormik hook we would have to pass setFieldTouch outside render method to nextbtnhndlr
  //there are 3 ways to achieve it:- 1) use useformik instead of <Formik> 2) use apply,bind,call to bind nxtbtnhndlr to
  //formik props. 3) pass formik props as argument to nxtbtnhndlr when its called from Wizard.step

  // const { isValid, setFieldTouched } = formik;
  // const stepperbtnHandler = () => {
  //   for (let key in validation[index - 1].fields) {
  //     formik.setFieldTouched(key);
  //   }
  //   if (formik.isValid) {
  //     setStep(index + 1);
  //   }
  // };
  return (
    // <Formik
    //   initialValues={initialValues}
    //   validationSchema={validation[step - 1]}
    //   validateOnMount={true}
    //   onSubmit={nextButtonHandler}
    // >
    // {(formik) => {
    //   console.log("values: ", formik.values);
    //   console.log("errors: ", formik.errors);
    //   console.log("touched: ", formik.touched);
    // console.log("formik: ", formik);
    // return (
    <form onSubmit={formik.handleSubmit} className="stepper-form">
      {React.Children.map(children, (element, index) => {
        let originIndex = index + 1;
        if (originIndex === step)
          return React.cloneElement(element, {
            step,
            totalPages,
            setStep,
            steps,
            nextButtonHandler,
            isCompleted,
            setIsCompleted,
            formik,
            prevButtonHandler,
            validation,
            orientation,
          });
      })}
    </form>
  );
  // }}
  // </Formik>
  // );
}

export default Wizard;

Wizard.Step = ({
  children,
  step,
  totalPages,
  prevButtonHandler,
  submitForm,
  setStep,
  nextButtonHandler,
  validation,
  isCompleted,
  setIsCompleted,
  formik,
  steps,
  orientation,
}) => {
  return (
    <>
      <Stepper
        setStep={setStep}
        setIsCompleted={setIsCompleted}
        validation={validation}
        values={formik.values} /* activeStep={1} */
        setTouched={formik.setTouched}
        orientation={orientation}
      >
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
              <button
                type="button"
                className="step-button"
                // onClick={() => {
                //   setStep(index + 1);
                // }}
              >
                {el}
              </button>
            </div>
          );
        })}
      </Stepper>
      <div className="horizontal-divider"></div>
      <section className="step-section">{children(formik)}</section>
      <div className="horizontal-divider"></div>
      <div className="button-container">
        {step !== 1 && (
          <button
            type="button"
            onClick={prevButtonHandler}
            // onClick={() => prevButtonHandler(formik)}
            className="btn btn-primary me-3"
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
          // <button onClick={() => nextButtonHandler(formikProps)}>Next</button>
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
    </>
  );
};
