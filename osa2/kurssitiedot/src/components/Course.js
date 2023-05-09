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
  return <h2>{course.name}</h2>
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

export default Course

