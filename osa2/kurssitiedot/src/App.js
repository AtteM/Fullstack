const Course = ({course}) => {

  return (
  <>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>  
  )
}

const Header = ({course}) => {
  return <h1>{course.name}</h1>
}

const Part = ({part}) => {
  return <p>{part.name} {part.exercises}</p>
}

const Content = ({course}) => {

  return (
  <>
    {course.parts.map(part =>
      <Part key={part.id} part={part} />
    )}
  </>  
  )
}

const Total = ({course}) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p><b>total of {total} exercises</b></p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
