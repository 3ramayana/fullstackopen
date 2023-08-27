import Part from './Part';

const Content = ({ parts }) => {
  const part = parts.map((part) => {
    return <Part key={part.id} part={part} />;
  });
  return part;
};

export default Content;
