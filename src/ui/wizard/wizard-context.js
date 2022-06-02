import { createContext, useContext } from "react";

export const WizardContext = createContext({
  steps: [],
  totalPages: null,
  orientation: "",
  step: 1,
  setStep: () => {},
  validation: [],
  formik: {},
  prevButtonHandler: () => {},
  isCompleted: false,
  setIsCompleted: () => {},
});

export const useWizard = () => useContext(WizardContext);

// const WizardContextProvider = ({ children }) => {
//   // const [step, setStep] = useState(1);
//   // const [isCompleted, setIsCompleted] = useState({});
//   // const steps = ["Personal", "Education", "Professional"];
//   // const totalPages = steps.length;

//   // const initialValues = {
//   //   firstName: "",
//   //   lastName: "",
//   //   email: "",
//   //   address: "",
//   //   graduation: "",
//   //   gradSpecialisation: "",
//   //   currentCompanyName: "",
//   //   currentDesignation: "",
//   // };
//   // const page1Validation = Yup.object().shape({
//   //   firstName: Yup.string().required("Required"),
//   //   lastName: Yup.string().required("Required"),
//   //   email: Yup.string().email("Invalid Email").required("Required"),
//   //   address: Yup.string()
//   //     .min(10, "Min 10 characters required")
//   //     .required("Required"),
//   // });
//   // const page2Validation = Yup.object().shape({
//   //   graduation: Yup.string().required("Required"),
//   //   gradSpecialisation: Yup.string().required("Required"),
//   // });
//   // const page3Validation = Yup.object().shape({
//   //   currentCompanyName: Yup.string().required("Required"),
//   //   currentDesignation: Yup.string().required("Required"),
//   // });
//   // const validation = [page1Validation, page2Validation, page3Validation];
//   // //   const onSubmit = (values, onSubmitProps) => {
//   // //     alert("Form submitted successfully");
//   // //   };
//   // const nextButtonHandler = useCallback(
//   //   (values, bag) => {
//   //     if (totalPages === step) {
//   //       alert("Final Submit");
//   //     }
//   //     if (step < totalPages) {
//   //       setStep((prev) => prev + 1);
//   //       setIsCompleted((prev) => ({ ...prev, [step - 1]: true }));
//   //       bag.setTouched({});
//   //       bag.setSubmitting(false);
//   //     }
//   //   },
//   //   [step]
//   // );

//   // const formik = useFormik({
//   //   initialValues,
//   //   validationSchema: validation[step - 1],
//   //   validateOnMount: true,
//   //   onSubmit: nextButtonHandler,
//   // });
//   // const prevButtonHandler = useCallback(() => {
//   //   setStep((prev) => prev - 1);
//   //   formik.setErrors({});
//   // }, []);
//   const contextValue = {
//     step,
//     setStep,
//     steps,
//     totalPages,
//     formik,
//     validation,
//     prevButtonHandler,
//     isCompleted,
//     setIsCompleted,
//     orientation: "vertical",
//   };
//   return (
//     <WizardContext.Provider value={contextValue}>
//       {children}
//     </WizardContext.Provider>
//   );
// };

// export default WizardContextProvider;
