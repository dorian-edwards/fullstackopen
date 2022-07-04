import Country from './Country'
import Listing from './Listing'

const Results = ({ data, selected, handleSelect }) => {
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
