import React from "react";

function Button({
  text,
  bgColor,
  textColor,
  borderColor,
  hoverColor,
  textSize,
  type,
  onClick,
  full,
}) {
  return (
    <button
      className={` transition duration-300 ${
        full && "w-full"
      } px-5 py-2 rounded-3xl text-light text-${textSize ? textSize : "sm"} ${
        textColor ? `text-${textColor}` : "text-white"
      } ${
        hoverColor ? `hover:bg-${hoverColor}` : "hover:opacity-50"
      } rounded-sm ${bgColor ? `bg-${bgColor}` : "bg-highlight"} ${
        borderColor && `border border-${borderColor}`
      } focus:outline-none`}
      type={type ? type : "submit"}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
