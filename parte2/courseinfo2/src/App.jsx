const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} - {props.exercise} exercises
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} part={part.name} exercise={part.exercise} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercise, 0);
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercise: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercise: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
