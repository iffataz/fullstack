const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  );
};

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Content = (props) => {

  return (
    <div>
      <Part partName={props.course.parts[0].name} numExs={props.course.parts[0].exercises} />
      <Part partName={props.course.parts[1].name} numExs={props.course.parts[1].exercises} />
      <Part partName={props.course.parts[2].name} numExs={props.course.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises is <strong>{props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</strong>
      </p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      {props.partName}: {props.numExs}
    </div>
  );
};
export default App;
