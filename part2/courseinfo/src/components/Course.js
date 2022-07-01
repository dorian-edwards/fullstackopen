const Header = ({ name }) => <h2>{name}</h2>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ parts }) => {
  const sum = parts.reduce((total, obj) => {
    total += obj.exercises
    return total
  }, 0)

  return <strong>total of {sum} exercises</strong>
}

const Content = ({ course }) => (
  <>
    {course.parts.map((part) => (
      <Part part={part} key={part.id} />
    ))}
    <Total parts={course.parts} />
  </>
)

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content course={course} />
    </>
  )
}

export default Course
