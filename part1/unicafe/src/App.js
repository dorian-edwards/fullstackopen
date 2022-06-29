import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const StaticsLine = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
)

const Stats = ({ stats }) => {
  const count = Object.entries(stats).reduce((sum, [cat, num]) => {
    sum += num
    return sum
  }, 0)

  const avg = (stats.good * 1 + stats.bad * -1) / count

  return (
    <>
      <h2>statistics</h2>
      {count === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <div>
            <StaticsLine text='good' value={stats.good} />
            <StaticsLine text='neutral' value={stats.neutral} />
            <StaticsLine text='bad' value={stats.bad} />
          </div>
          <div>
            <p>all: {count}</p>
            <p>
              average: {Number.isNaN(avg) ? 0 : Number(avg * 100).toFixed(2)}%
            </p>
          </div>
        </>
      )}
    </>
  )
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
      <Stats stats={stats} />
    </div>
  )
}

export default App
