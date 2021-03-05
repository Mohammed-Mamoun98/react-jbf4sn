import React from "react";
import { DoubleCircularProgress } from "../Progress/index.jsx";

export const Timer = ({ value = 0, style = null }) => {
  return (
    <>
      <DoubleCircularProgress value={value} baseStyle={style} />
    </>
  );
};
