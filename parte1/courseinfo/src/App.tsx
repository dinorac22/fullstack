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
    name: string;
    exercise: number;
  }[];
}

const Content = (props: ContentProps) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercise} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercise} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercise} />
    </div>
  );
};

interface TotalProps {
  parts: {
    name: string;
    exercise: number;
  }[];
}

const Total = (props: TotalProps) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercise +
        props.parts[1].exercise +
        props.parts[2].exercise}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercise: 10,
    },
    {
      name: "Using props to pass data",
      exercise: 7,
    },
    {
      name: "State of a component",
      exercise: 14,
    },
  ];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default App;
