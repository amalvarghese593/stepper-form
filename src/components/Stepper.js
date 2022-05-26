import React from "react";

export const Stepper = ({
  /* activeStep, */ children,
  setStep,
  setIsCompleted,
  setTouched,
  validation,
  values,
}) => {
  return (
    <div className="stepper-wrapper">
      {React.Children.map(children, (element, index) => {
        return React.cloneElement(element, {
          onClick: () => {
            if (!index) return setStep(index + 1);
            for (const key in validation[index - 1].fields) {
              if (!values[key]) return;
            }
            setStep(index + 1);
            setIsCompleted((prev) => ({ ...prev, [index - 1]: true }));
            setTouched({});
          },
        });
      })}
    </div>
  );
};
