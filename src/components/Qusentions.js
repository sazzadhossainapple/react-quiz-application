import classes from "../styles/Question.module.css";
import Answers from "./Answers";
export default function Question({ answers = [] }) {
  return answers.map((answers, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answers.title}
      </div>
      <Answers input={false} options={answers.options} />
    </div>
  ));
}
