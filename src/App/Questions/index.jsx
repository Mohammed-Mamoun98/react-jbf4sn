import React, { useState, useEffect } from "react";
import { Question } from "./Question/index.jsx";
import { Button } from "@material-ui/core";

export const Questions = ({ questions: initQuestions = [] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(initQuestions);

  const nextQuestion = () => setCurrentQuestion(c => c + 1);
  const prevQuestion = () => setCurrentQuestion(c => c - 1);

  const disableNext = currentQuestion === questions.length - 1;

  const submitQustion = (id , selected) => {
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
      <div className="d-flex gap-lg">
        <Button
          disabled={!currentQuestion}
          onClick={prevQuestion}
          variant="contained"
          className="flex-1"
        >
          Previos
        </Button>
        <Button
          disabled={disableNext}
          onClick={nextQuestion}
          variant="contained"
          className="flex-1"
        >
          Next
        </Button>
      </div>
      <Question
        question={questions[currentQuestion]}
        onOptionClick={submitQustion}
      />
    </div>
  );
};
