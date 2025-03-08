import React from "react";
import TooltipButton from "../components/button/TooltipButton.jsx";

function App() {
  return (
    <div>
      <TooltipButton
        label="Hover me!"
        onClick={() => alert("Button clicked!")}
        className="bg-blue-500 text-white m-40"
        tooltipContent="加入購物車"
        tooltipId="tooltip-1"
        tooltipPlace="top"
      />
    </div>
  );
}

export default App;
