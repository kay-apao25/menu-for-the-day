import React from "react";

const RadioInput = ({ id, value, disable, className, handleOnChange }) => {
  return (
    <>
      {value}
      <input
        type="radio"
        style={{ marginRight: "20px" }}
        name={`food${className}`}
        value={value}
        id={id}
        disabled={disable.includes(parseInt(id))}
        className={className}
        onChange={handleOnChange}
      />
    </>
  );
};

export default RadioInput;
