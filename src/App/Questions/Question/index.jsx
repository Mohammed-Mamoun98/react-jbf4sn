import React, { useState, useEffect } from "react";
import { Button, Grow, Paper } from "@material-ui/core";
import { Option } from "../../Components/Option/index.jsx";
import { Timer } from "../../Components/Timer/index.jsx";
import { Title } from "./Title/index.jsx";
import { Hint as Help } from "./Hint/index.jsx";
import { ToolBar } from "./Toolbar/index.jsx";
import "./index.scss";

export const Question = ({
  question,
  onOptionClick = () => {},
  nextQuestion = () => {},
  disableNext = false
}) => {
  const { options, title, id, selected } = question;
  const [show, setShow] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const correctOneId = options.find(elem => elem.correct)?.id;

  const toggleShow = () => {
    if (isSubmitted) return;
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100);
  };

  useEffect(() => {
    toggleShow();
    setIsSubmitted(false);
  }, [id]);

  const handleCheck = () => setIsSubmitted(true);

  const getOptionStatus = id => {
    if (isSubmitted) {
      //right answer
      if (id === correctOneId) return 2;
      //wrong answer
      if (id === selected) return 3;
      //none
      return 0;
    }
    if (id === selected) return 1;
    else return 0;
  };

  const handleOptionClick = (id, optionId) => {
    //stop time
    if (!isSubmitted) onOptionClick(id, optionId);
  };

  return (
    <>
      <div className="question-whole-container position-relative border-sm-none">
        <Title text={title} />
        {show && (
          <div className="question-container">
            {options.map(
              ({ title = "", id: optionId = 0, correct = false }, index) => (
                <div className="">
                  <Grow in timeout={index * 500}>
                    <Paper elevation={0}>
                      <Option
                        title={title}
                        onClick={() => handleOptionClick(id, optionId)}
                        status={getOptionStatus(optionId)}
                      />
                    </Paper>
                  </Grow>
                </div>
              )
            )}
          </div>
        )}
      </div>
      <ToolBar
        onCheck={handleCheck}
        onNext={nextQuestion}
        disableNext={!isSubmitted || disableNext}
        disableCheck={!selected || isSubmitted}
      />
    </>
  );
};
