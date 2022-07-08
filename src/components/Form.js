import React from "react";

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
      </div>
    );
  },
};

export default Form;
