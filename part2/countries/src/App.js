import { useState, useEffect } from 'react'
import axios from 'axios'
import Listings from './components/Listings'

function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

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
        {search && <Listings data={displayResults} />}
      </div>
    </>
  )
}

export default App
