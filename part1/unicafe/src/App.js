import { useState } from 'react';

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ text, handleClick }) => {
  // console.log(text);
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  if (text === 'Positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  }
};

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / sum;
  const positive = (good / sum) * 100;

  if (sum === 0) {
    return <p>No Feedback given</p>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />

          <StatisticLine text="All" value={sum} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const count = good + 1;
    setGood(count);
  };

  const handleNeutralClick = () => {
    const count = neutral + 1;
    setNeutral(count);
  };

  const handleBadClick = () => {
    const count = bad + 1;
    setBad(count);
  };

  return (
    <>
      <Heading text="Give Feedback" />
      <Button text="Good" handleClick={handleGoodClick} />
      <Button text="Neutral" handleClick={handleNeutralClick} />
      <Button text="Bad" handleClick={handleBadClick} />

      <Heading text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
