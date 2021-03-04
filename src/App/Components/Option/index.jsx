import React from "react";
import "./index.scss";

export const Option = ({ title = "" }) => {
  return <div className="flex-center option-continer">{title}</div>;
};
