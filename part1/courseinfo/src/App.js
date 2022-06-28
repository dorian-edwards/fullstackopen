const Header = (props) => <h1>Course: {props.course}</h1>
const Part = ({ name, exercises }) => (
  <p>
    {name}: {exercises}
  </p>
)
const Content = ({ data }) => {
  const list = data.map(({ name, exercises }) => {
    return <Part name={name} exercises={exercises} />
  })

  return <>{list}</>
}

const Total = ({ data }) => {
  const total = data.reduce((sum, obj) => {
    sum += obj.exercises
    return sum
  }, 0)
  return <p>Number of exercises: {total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  ]

  return (
    <div>
      <Header course={course} />
      <Content data={parts} />
      <Total data={parts} />
    </div>
  )
}

export default App
