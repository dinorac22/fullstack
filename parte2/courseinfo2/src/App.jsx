const Header = (props) => {
  return <h2>{props.course}</h2>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
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

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercise: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercise: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;
