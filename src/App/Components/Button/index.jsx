import React from "react";
import "./index.scss";

export const Button = ({
  text = "test",
  disabled = false,
  onClick = () => {},
  ...props
}) => {
  const disableClass = disabled ? "disabled" : "";
  const handleClick = () => {
    if (disabled) return;
    onClick();
  };
  return (
    <div
      className={`flex-center btn-s fill-at-mobile ${disableClass}`}
      {...props}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};
