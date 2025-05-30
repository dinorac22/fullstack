interface HeaderProps {
  course: string;
}

const Header = (props: HeaderProps) => {
  return <h1>{props.course}</h1>;
};

interface ContentProps {
  part: string;
  excercise: number;
}

const Content = (props: ContentProps) => {
  return (
    <div>
      <p>
        {props.part} - {props.excercise} excercises
      </p>
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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content part={part1} excercise={exercises1} />
      <Content part={part2} excercise={exercises2} />
      <Content part={part3} excercise={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;
