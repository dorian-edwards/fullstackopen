const Listing = ({ country, onClick }) => {
  return (
    <div>
      {country.name.common}{' '}
      <button onClick={() => onClick(country)}>Show</button>
    </div>
  )
}

export default Listing
