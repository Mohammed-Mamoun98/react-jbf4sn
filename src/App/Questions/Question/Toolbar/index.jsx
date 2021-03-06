import React from "react";
import { Button } from "../../../Components/Button/index.jsx";
import "./index.scss";

export const ToolBar = ({
  onCheck = () => {},
  onNext = () => {},
  disabled = false,
  disableNext,
  disableCheck
}) => {
  return (
    <div className="toolbar-container ">
      <Button text="التالي" disabled={disableNext} onClick={onNext} />
      <Button
        text="تحقق من الإجابة"
        onClick={onCheck}
        disabled={disableCheck}
      />
    </div>
  );
};
