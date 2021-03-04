import React from "react";

function Input(props) {
  const {
    label,
    name,
    minLength,
    maxLength,
    placeholder,
    onChange,
    defaultValue,
    errorText,
  } = props;

  return (
    <>
      <label className="input_label">{label}</label>
      <input
        type={name}
        name={name}
        required
        minLength={minLength}
        maxLength={maxLength}
        className="input"
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      <span className="input_type_error" id="inputName-error">
        {errorText}
      </span>
    </>
  );
}

export default Input;
