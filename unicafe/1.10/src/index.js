import { React, useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Display = (props) => (
  <div>
    {props.name} {props.value}
  </div>
);

const Statistic = (props) => <Display name={props.text} value={props.value} />;

const Statistics = (props) => {
  const getAverage = () =>
    props.good + props.neutral + props.bad > 0
      ? (props.good - props.bad) / (props.good + props.neutral + props.bad)
      : "N/A";
  const getPositive = () =>
    props.good + props.neutral + props.bad > 0
      ? `${(props.good * 100) / (props.good + props.neutral + props.bad)}%`
      : "N/A";
  if (props.good + props.neutral + props.bad === 0) {
    return <h2>No feedback given</h2>;
  }
  return (
    <div>
      <h1>Statistics</h1>
      <Statistic text="good" value={props.good} />
      <Statistic text="neutral" value={props.neutral} />
      <Statistic text="bad" value={props.bad} />
      <Statistic text="All" value={props.good + props.neutral + props.bad} />
      <Statistic text="Average" value={getAverage()} />
      <Statistic text="Positive" value={getPositive()} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodReview = () => setGood(good + 1);
  const addNeutralReview = () => setNeutral(neutral + 1);
  const addBadReview = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={addGoodReview} text="good" />
      <Button handleClick={addNeutralReview} text="neutral" />
      <Button handleClick={addBadReview} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
