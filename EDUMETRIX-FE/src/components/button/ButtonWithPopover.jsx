import React, { useState } from "react";
import Button from "./Button.jsx";

function ButtonWithPopover({ label, popoverContent, className }) {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  let timeoutId;

  const showPopover = () => {
    clearTimeout(timeoutId);
    setIsPopoverVisible(true);
  };

  const hidePopover = () => {
    timeoutId = setTimeout(() => {
      setIsPopoverVisible(false);
    }, 30);
  };

  return (
    <div className="relative">
      {/* 使用基礎 Button 組件 */}
      <Button
        label={label}
        className={`${className}`}
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
      />

      {/* 彈跳視窗 */}
      {isPopoverVisible && (
        <div
          className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-60  p-4 bg-white border border-gray-300 shadow-lg rounded-lg"
          onMouseEnter={showPopover}
          onMouseLeave={hidePopover}
        >
          {popoverContent}
        </div>
      )}
    </div>
  );
}

export default ButtonWithPopover;
