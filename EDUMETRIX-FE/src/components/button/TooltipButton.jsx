import React from "react";
import { Tooltip } from "react-tooltip";

function TooltipButton({
  label,
  onClick,
  className,
  tooltipContent,
  tooltipId,
  tooltipPlace = "top",
}) {
  return (
    <div>
      {/* Button with data-tooltip attributes */}
      <button
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltipContent}
        data-tooltip-place={tooltipPlace}
        className={`p-2 rounded ${className}`}
        onClick={onClick}
      >
        {label}
      </button>

      {/* Tooltip component */}
      <Tooltip id={tooltipId} />
    </div>
  );
}

export default TooltipButton;
