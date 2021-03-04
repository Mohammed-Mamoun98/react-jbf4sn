import { Option, Question } from "../models/Question";
import { v4 as uuid } from "uuid";

const createOptions = (titles = [], correctIndex = 0) => {
  return titles.map(
    (title, i) => new Option(title, uuid(), correctIndex === i)
  );
};

const first_Q_Title = "حرب:سلم";
const first_Q_optionsTitles = [
  "جيش:استسلام",
  "سيف:مدفع",
  "مسلم:كافر",
  "مقتول:جريح"
];
const first_Q_Hint = "العلاقة تضاد";
const first_Q_FeedBack = "لا يوجد تضاد إلا الخيار ج وباقي الخيارات غير مناسبة";
const first_Q_Options = createOptions(first_Q_optionsTitles, 2);

export const firstQuestion = new Question(
  first_Q_Title,
  first_Q_Options,
  uuid(),
  first_Q_Hint,
  first_Q_FeedBack
);

const second_Q_Title = "عبء:حمل";
const second_optionsTitles = ["مقبض:باب", "مزلاج:قفل", "حصاد:حرث", "تعب:انتاج"];
const second_Q_Hint = "العلاقة ترادف";
const second_Q_FeedBack = "لا يوجد تضاد إلا الخيار ب وباقي الخيارات غير مناسبة";
const second_Q_Options = createOptions(second_optionsTitles, 1);

const third_Q_Title = "أول:آخر";
const third_optionsTitles = ["حب:كره", "صداقة:صحبة", "ظهر:فجر", "جود:كرم"];
const third_Q_Hint = "العلاقة تضاد";
const third_Q_FeedBack = "لا يوجد تضاد إلا الخيار أ وباقي الخيارات غير مناسبة";
const third_Q_Options = createOptions(second_optionsTitles, 0);

export const secondQuestion = new Question(
  second_Q_Title,
  second_Q_Options,
  uuid()
);
