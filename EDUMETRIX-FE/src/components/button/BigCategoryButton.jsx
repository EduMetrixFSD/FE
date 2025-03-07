import React, { Component } from "react";

function BigCategoryButton({
  label,
  onClick,
  className,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <button
      className={`px-12 py-4 text-xl rounded bg-green-300 font-bold mx-5 ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label}
    </button>
  );
}

export default BigCategoryButton;
