import React from "react";
import { useWizard } from "../ui/wizard/wizard-context";

export const Stepper = ({ children }) => {
  const { setStep, setIsCompleted, formik, validation } = useWizard();
  const { setTouched, values } = formik;
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
