import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const Stats = ({ stats }) => {
  const data = []

  for (let key in stats) {
    data.push(
      <p key={key.length + 'n'}>
        {key}: {stats[key]}
      </p>
    )
  }

  return <>{data}</>
}

function App() {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleGoodReview = () =>
    setStats({
      ...stats,
      good: stats.good + 1,
    })

  const handleNeutralReview = () =>
    setStats({
      ...stats,
      neutral: stats.neutral + 1,
    })

  const handleBadReview = () =>
    setStats({
      ...stats,
      bad: stats.bad + 1,
    })

  return (
    <div className='App'>
      <h2>give feedback</h2>
      <Button onClick={handleGoodReview} text='good' />
      <Button onClick={handleNeutralReview} text='neutral' />
      <Button onClick={handleBadReview} text='bad' />
      <h2>statistics</h2>
      <Stats stats={stats} />
    </div>
  )
}

export default App
