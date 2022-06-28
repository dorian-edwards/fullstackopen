const Header = (props) => <h1>Course: {props.course}</h1>
const Part = ({ part, exercises }) => (
  <p>
    {part}: {exercises}
  </p>
)
const Content = ({ data }) => {
  const list = data.map(({ part, exercises }) => {
    return <Part part={part} exercises={exercises} />
  })

  return <>{list}</>
}

const Total = (props) => {
  const total = props.total.reduce((a, b) => a + b, 0)
  return <div>Number of exercises: {total}</div>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const courseData = [
    {
      part: part1,
      exercises: exercises1,
    },
    {
      part: part2,
      exercises: exercises2,
    },
    {
      part: part3,
      exercises: exercises3,
    },
  ]
  return (
    <div>
      <Header course={course} />
      <Content data={courseData} />
      <Total total={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App
