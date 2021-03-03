export class Question {
  constructor(title = "", options = [], id = 0) {
    this.title = title;
    this.options = options;
    this.id = id;
  }
}

export class Option {
  constructor(title = "", id = 0, correct = false) {
    this.title = title;
    this.id = id;
    this.correct = correct;
  }
}

export const question = new Question(
  "this is the new title!",
  [new Option("option 1", 1)],
  1
);
