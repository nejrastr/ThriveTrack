import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (!props.value.trim()) {
      setError("Please enter a value.");
    } else {
      setError("");
    }

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
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;
