import React, { Component } from "react";

function Button({ label, onClick, className, onMouseEnter, onMouseLeave }) {
  return (
    <button
      className={`p-2 rounded ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label}
    </button>
  );
}

export default Button;
