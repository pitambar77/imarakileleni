import React from "react";

const PrimaryButton = ({
  label = "Click Me",
  onClick,
  bgColor = "#d87028",
  hoverColor = "#ffffff",
  textColor = "#ffffff",
  padding = "px-6 py-3",
  rounded = "rounded-full",
  fullWidth = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
      }}
      className={`
        font-semibold transition uppercase
        hover:bg-[${hoverColor}] 
        text-[${textColor}]
        ${padding} 
        ${rounded}
        ${fullWidth ? "w-full" : "w-fit"}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
