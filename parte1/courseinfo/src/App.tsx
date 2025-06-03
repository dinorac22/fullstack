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
  part1: {
    name: string;
    exercise: number;
  };
  part2: {
    name: string;
    exercise: number;
  };
  part3: {
    name: string;
    exercise: number;
  };
}

const Content = (props: ContentProps) => {
  return (
    <div>
      <Part part={props.part1.name} exercise={props.part1.exercise} />
      <Part part={props.part2.name} exercise={props.part2.exercise} />
      <Part part={props.part3.name} exercise={props.part3.exercise} />
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
  const part1 = {
    name: "Fundamentals of React",
    exercise: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercise: 7,
  };
  const part3 = {
    name: "State of a component",
    exercise: 14,
  };

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercise + part2.exercise + part3.exercise} />
    </>
  );
};

export default App;
