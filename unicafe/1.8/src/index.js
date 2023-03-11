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

const Statistics = (props) => {
  const getAverage = () =>
    props.good + props.neutral + props.bad > 0
      ? (props.good - props.bad) / (props.good + props.neutral + props.bad)
      : "N/A";
  const getPositive = () =>
    props.good + props.neutral + props.bad > 0
      ? `${(props.good * 100) / (props.good + props.neutral + props.bad)}%`
      : "N/A";
  return (
    <div>
      <h1>Statistics</h1>
      <Display name="good" value={props.good} />
      <Display name="neutral" value={props.neutral} />
      <Display name="bad" value={props.bad} />
      <Display name="All" value={props.good + props.neutral + props.bad} />
      <Display name="Average" value={getAverage()} />
      <Display name="Positive" value={getPositive()} />
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
