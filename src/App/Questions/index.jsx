import React, { useState, useEffect } from "react";
import { Question } from "./Question/index.jsx";
import { Button } from "@material-ui/core";
import { BorderLinearProgress } from "../Components/Progress/index.jsx";
import { Timer } from "../Components/Timer/index.jsx";
import { colors } from "";

export const Questions = ({ questions: initQuestions = [] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(initQuestions);
  const progesValue = ((currentQuestion + 1) / questions.length) * 100;

  const nextQuestion = () => setCurrentQuestion(c => c + 1);
  const prevQuestion = () => setCurrentQuestion(c => c - 1);

  const disableNext = currentQuestion === questions.length - 1;

  const submitQustion = (id, selected) => {
    const prevQuestion = questions.find(question => question.id === id);
    const newQuestion = {
      ...prevQuestion,
      isSubmitted: true,
      selected
    };
    const questionsAfterEdit = questions.map(question => {
      if (question.id === id) return newQuestion;
      return question;
    });
    setQuestions(questionsAfterEdit);
  };

  console.log({ questions });
  return (
    <div>
      <Timer
        disableTimer={disableNext}
        style={{ color: "yellow" }}
        onTimerEnd={nextQuestion}
        triggerRestart={currentQuestion}
      />
      <BorderLinearProgress
        value={progesValue}
        variant="determinate"
        style={{ height: "1.2rem", borderRadius: "15px" }}
      />
      <Question
        question={questions[currentQuestion]}
        onOptionClick={submitQustion}
      />
    </div>
  );
};
