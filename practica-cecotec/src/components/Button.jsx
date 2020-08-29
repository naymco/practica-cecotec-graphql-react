import React from "react";

const Button = ({ value, className, type, onClick, disabled }) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};

export default Button;
