import { useState, useEffect } from 'react'
import axios from 'axios'
import Results from './components/Results'

function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const clearSearch = (e) => setSearch(e)

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(({ data }) => {
      setResults(data)
    })
  }, [])

  const displayResults = search
    ? results.filter((state) => {
        return state.name.common.toLowerCase().includes(search.toLowerCase())
      })
    : null

  return (
    <>
      <div>
        find countries <input value={search} onChange={handleSearch} />
        {search && <Results data={displayResults} clearSearch={clearSearch} />}
      </div>
    </>
  )
}

export default App
