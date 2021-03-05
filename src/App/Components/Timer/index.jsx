import React, { useState, useEffect } from "react";
import { DoubleCircularProgress } from "../Progress/index.jsx";

export const Timer = ({
  value = 0,
  style = null,
  onTimerEnd = () => {},
  disableTimer = false,
  s = 10
}) => {
  const [counter, setCounter] = useState(s - 1);
  const progressValue = counter * 10;

  const decreaseCounter = () => {
    // if (!counter) return;
    setCounter(c => c - 1);
  };
  console.log({ counter, progressValue });

  useEffect(() => {
    const iner = setInterval(() => {
      if (!disableTimer) return;

      if (counter < 0) {
        alert("zero");
        onTimerEnd();
        // setCounter(s);
        return;
      }
      decreaseCounter();
    }, 1000);

    return () => {
      clearInterval(iner);
    };
  }, []);

  return (
    <>
      <DoubleCircularProgress value={progressValue} baseStyle={style} />
    </>
  );
};
