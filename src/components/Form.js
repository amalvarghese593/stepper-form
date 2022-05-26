import React from "react";
// import { Field, ErrorMessage } from "formik";
// import TextError from "./TextError";
import DateView from "react-datepicker";

const Form = {
  Input(props) {
    const { label, name, error, touched, ...rest } = props;
    return (
      <div className="mb-3">
        {label && (
          <label htmlFor={name} className="form-label field-label">
            {label}
          </label>
        )}
        <input id={name} name={name} {...rest} className="form-control" />
        {error && touched && (
          <div className="validation-message-container">
            <p className="text-danger validation-message">{error}</p>
          </div>
        )}
        {/* <ErrorMessage component={TextError} name={name} /> */}
      </div>
    );
  },

  DatePicker(props) {
    const { placeholder, label, name, formik, ...rest } = props;
    return (
      <div className="mb-3">
        <label className="mb-2" htmlFor={name}>
          {label}
        </label>
        {/* <Field name={name}>
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DateView
                className="border rounded p-2 form-control"
                dateFormat="dd/MM/yyyy"
                // showYearPicker
                // scrollableYearDropdown
                maxDate={new Date()}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText={placeholder}
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
              />
            );
          }}
        </Field> */}
        {/* <ErrorMessage component={TextError} name={name} /> */}
      </div>
    );
  },
};

export default Form;
