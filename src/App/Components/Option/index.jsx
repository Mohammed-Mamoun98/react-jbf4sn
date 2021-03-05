import React from "react";
import "./index.scss";

export const Option = ({ title = "", status = 0, onClick = () => {} }) => {
  const optionStatus = [
    "option-normal",
    "option-clicked",
    "option-correct",
    "option-wrong"
  ];

  console.log({ status });

  const classNameByStatus = optionStatus[status];

  return (
    <div
      className={`flex-center option-continer ${classNameByStatus}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};
