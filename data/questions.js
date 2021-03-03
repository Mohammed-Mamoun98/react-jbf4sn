import { Option, Question } from "../models/Question";
import { v4 as uuid } from "uuid";

const createOptions = (titles = [], correctIndex = 0) => {
  return titles.map(
    (title, i) => new Option(title, uuid(), correctIndex === i)
  );
};

const first_Q_Title = "What is the Capital of US";
const first_Q_optionsTitles = ["Washington Dc", "Canada", "Texas", "NW"];
const first_Q_Options = createOptions(first_Q_optionsTitles, 0);

export const firstQuestion = new Question(
  first_Q_Title,
  first_Q_Options,
  uuid()
);

export const second_Q_Title = "How many colors in Russia flag";
export const second_optionsTitles = ["2", "3", "5", "4"];
export const second_Q_Options = createOptions(second_optionsTitles, 1);

export const secondQuestion = new Question(
  second_Q_Title,
  second_Q_Options,
  uuid()
);
