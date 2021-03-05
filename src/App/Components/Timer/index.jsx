import React, { useState, useEffect } from "react";
import { DoubleCircularProgress } from "../Progress/index.jsx";

export const Timer = ({
  value = 0,
  style = null,
  onTimerEnd = () => {},
  disableTimer = false,
  triggerRestart = 0,
  s = 5
}) => {
  const [counter, setCounter] = useState(s - 1);
  const progressValue = (counter / s) * 100;

  const decreaseCounter = () => setCounter(c => c - 1);

  useEffect(() => {
    console.log({ counter, progressValue });
    const timer = setInterval(() => {
      if (disableTimer) return;
      if (counter <= 0) {
        {
          onTimerEnd();
          return;
        }
      }
      decreaseCounter();
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (triggerRestart) setCounter(s - 1);
  }, [triggerRestart]);

  return (
    <>
      <DoubleCircularProgress value={progressValue} baseStyle={style} />
    </>
  );
};
