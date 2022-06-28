const Header = ({ course: { name } }) => <h1>Course: {name}</h1>
const Part = ({ name, exercises }) => (
  <p>
    {name}: {exercises}
  </p>
)
const Content = ({ course: { parts } }) => {
  const list = parts.map(({ name, exercises }) => {
    return <Part name={name} exercises={exercises} />
  })

  return <>{list}</>
}

const Total = ({ course: { parts } }) => {
  const total = parts.reduce((sum, obj) => {
    sum += obj.exercises
    return sum
  }, 0)
  return <p>Number of exercises: {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
