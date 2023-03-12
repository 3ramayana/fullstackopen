import { useState } from 'react';

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

const Quote = ({ text, points }) => {
  return (
    <>
      <p>{text}</p>
      <p>has {points} votes</p>
    </>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const MostVote = ({ anecdotes, points }) => {
  const maxVote = Math.max(...points);
  const indexMaxVote = points.indexOf(maxVote);

  if (maxVote === 0) {
    return <div>No Vote Anecdote</div>;
  } else {
    return (
      <>
        <p>{anecdotes[indexMaxVote]}</p>
        <p>has {points[indexMaxVote]} votes</p>
      </>
    );
  }
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(8).fill(0));

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const handleNextAnecdote = () => {
    const idx = Math.floor(Math.random() * anecdotes.length);
    setSelected(idx);
  };

  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  return (
    <>
      <Heading text="Anecdote of The Day" />
      <Quote text={anecdotes[selected]} points={points[selected]} />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleNextAnecdote} text="Next Anecdote" />

      <Heading text="Anecdote with Most Votes" />
      <MostVote anecdotes={anecdotes} points={points} />
    </>
  );
};

export default App;
