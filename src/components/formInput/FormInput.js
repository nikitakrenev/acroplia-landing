import { Field } from "formik";
import React from "react";

export const FormInput = ({inputComponent, title, required, error, touched, name, className}) => {
    return (
        <div className={className}>
            <label htmlFor={name} className="grey-text input-label">
                {title}
                {required && <span className="text-danger">*</span>}
            </label>
            <Field
                name={name}
                as={inputComponent}
            />
            {error && touched && <small className="text-danger">{error}</small>}
        </div>
    )
};
