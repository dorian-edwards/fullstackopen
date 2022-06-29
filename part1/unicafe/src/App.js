import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const StaticsLine = ({ text, value }) => (
  <>
    <td>{text}</td>
    <td>{value}</td>
  </>
)

const Stats = ({ stats }) => {
  const count = Object.entries(stats).reduce((sum, [cat, num]) => {
    sum += num
    return sum
  }, 0)

  const avg = (stats.good * 1 + stats.bad * -1) / count
  const positive = stats.good / count

  return (
    <>
      <h2>statistics</h2>
      {count === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <StaticsLine text='good' value={stats.good} />
            </tr>
            <tr>
              <StaticsLine text='neutral' value={stats.neutral} />
            </tr>
            <tr>
              <StaticsLine text='bad' value={stats.bad} />
            </tr>
            <tr>
              <td>all</td>
              <td>{count}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{Number.isNaN(avg) ? 0 : Number(avg).toFixed(2)}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>
                {Number.isNaN(positive) ? 0 : Number(positive * 100).toFixed(2)}
                %
              </td>
            </tr>
          </tbody>
        </table>
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
