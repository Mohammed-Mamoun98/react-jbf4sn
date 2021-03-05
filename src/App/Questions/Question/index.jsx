import React, { useState, useEffect } from "react";
import { Button, Grow, Paper } from "@material-ui/core";
import { Option } from "../../Components/Option/index.jsx";
import { Timer } from "../../Components/Timer/index.jsx";
import { Title } from "./Title/index.jsx";
import "./index.scss";
export const Question = ({ question, onOptionClick = () => {} }) => {
  const { options, title, isSubmitted = false, id, selected } = question;
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    if (isSubmitted) return;
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100);
  };

  useEffect(() => {
    toggleShow();
  }, [id]);

  return (
    <div style={{ marginTop: "5rem" }}>
      <Title text={title} />
      {show && (
        <div className="question-container">
          {options.map(({ title = "", id: optionId = 0 }, index) => (
            <div className="">
              <Grow in timeout={index * 500}>
                <Paper elevation={0}>
                  <Option title={title} />
                </Paper>
              </Grow>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
// <Option title={title} />

// <Button
//   disabled={isSubmitted && selected !== optionId}
//   className="w-100 mt-3"
//   onClick={() => onOptionClick(id, optionId)}
//   variant="contained"
// >
//   {title}
// </Button>
