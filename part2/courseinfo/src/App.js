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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return (
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </>
  )
}

export default App
