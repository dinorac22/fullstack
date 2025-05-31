interface HeaderProps {
  course: string;
}

const Header = (props: HeaderProps) => {
  return <h1>{props.course}</h1>;
};

interface PartProps {
  part: string;
  exercise: number;
}

const Part = (props: PartProps) => {
  return (
    <p>
      {props.part} - {props.exercise} exercises
    </p>
  );
};

interface ContentProps {
  parts: {
    part: string;
    exercise: number;
  }[];
}

const Content = (props: ContentProps) => {
  return (
    <div>
      <Part part={props.parts[0].part} exercise={props.parts[0].exercise} />
      <Part part={props.parts[1].part} exercise={props.parts[1].exercise} />
      <Part part={props.parts[2].part} exercise={props.parts[2].exercise} />
    </div>
  );
};

interface TotalProps {
  total: number;
}

const Total = (props: TotalProps) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    { part: "Fundamentals of React", exercise: 10 },
    { part: "Using props to pass data", exercise: 7 },
    { part: "State of a component", exercise: 14 },
  ];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        total={parts[0].exercise + parts[1].exercise + parts[2].exercise}
      />
    </>
  );
};

export default App;
