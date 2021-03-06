import React, { useEffect } from "react";
import {
  firstQuestion,
  secondQuestion,
  thirdQuestion
} from "../../data/questions.js";
import { Button } from "@material-ui/core";
import { Questions } from "./Questions/index";
import "./index.scss";

export default function App() {
  const questions = [firstQuestion, secondQuestion, thirdQuestion];

  return (
    <div className="container-fluid p-0 mt-5 d-flex flex-column h-100 questions-whole-container">
      <Questions questions={questions} />
    </div>
  );
}
