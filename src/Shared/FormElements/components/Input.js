import React, { useState } from "react";
import "./Input.css";
import { validate } from "../../utils/validators";
//import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../utils/validators";
//const validators = [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH()];
const Input = (props) => {
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (props.validators) {
      const isValid = validate(props.value, props.validators);
      if (!isValid) {
        setError(props.errorText);
        return;
      }
    }
    setError("");
    if (props.onBlur) {
      props.onBlur();
    }
  };

  return (
    <div className="input-wrapper">
      <label className="label">{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={handleBlur}
      />
      {error && <p className="error-message">{props.errorText}</p>}
    </div>
  );
};

export default Input;
