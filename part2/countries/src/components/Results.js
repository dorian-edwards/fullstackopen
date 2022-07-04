import Country from './Country'
import Listing from './Listing'
import { useState } from 'react'

const Results = ({ data, clearSearch }) => {
  const [selected, setSelected] = useState(null)

  const handleSelect = (e) => {
    clearSearch(e.name.common)
    setSelected(e)
  }

  if (selected) {
    return <Country country={selected} />
  }
  if (data.length === 0) return <p>No matches</p>
  if (data.length > 10) return <p>Too many matches, specify another filter</p>

  if (data.length > 1) {
    return data.map((country) => (
      <Listing
        key={country.name.common}
        country={country}
        onClick={handleSelect}
      />
    ))
  }

  return <Country country={data[0]} />
}

export default Results
