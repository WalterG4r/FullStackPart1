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
      <h1>Statistics</h1>
      <Display name="good" value={good} />
      <Display name="neutral" value={neutral} />
      <Display name="bad" value={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
