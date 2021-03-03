import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

export const Questions = ({ questions = [] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => setCurrentQuestion(c => c + 1);
  const prevQuestion = () => setCurrentQuestion(c => c - 1);

  const disableNext = currentQuestion === questions.length;

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
      {currentQuestion}
    </div>
  );
};
