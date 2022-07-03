import Country from './Country'

const Listings = ({ data }) => {
  if (data.length === 0) return <p>No matches</p>
  if (data.length > 10) return <p>Too many matches, specify another filter</p>

  if (data.length > 1) {
    return data.map(({ name: { common } }) => <div key={common}>{common}</div>)
  }

  return <Country country={data[0]} />
}

export default Listings
