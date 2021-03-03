import React, { useEffect } from "react";
import { firstQuestion, secondQuestion } from "../../data/questions.js";
import { Button } from "@material-ui/core";
import { Questions } from "./Questions/index";

export default function App() {
  useEffect(() => {
    console.log({ secondQuestion, a: 1 });
  }, []);

  const questions = [firstQuestion, secondQuestion];

  return (
    <div className="container mt-5 d-flex flex-column">
      <Questions questions={questions} />
    </div>
  );
}
