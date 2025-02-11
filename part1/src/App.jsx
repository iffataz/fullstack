const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content partName={part1} numExs={exercises1} />
      <Content partName={part2} numExs={exercises2} />
      <Content partName={part3} numExs={exercises3} />
      <Total sum={exercises1+exercises2+exercises3}/>

    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.partName}: {props.numExs}
      </p>
    </div>
  );
};

const Total = (props) => {
  return <div>
    <p>Number of exercises is <strong>{props.sum}</strong></p> 
  </div>;
};
export default App;
