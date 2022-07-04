const Country = ({ country }) => (
  <>
    <h2>{country.name.common}</h2>
    <div>capital {country.capital[0]}</div>
    <div>area {country.area}</div>
    <br />
    <strong>languages</strong>
    <ul>
      {Object.values(country.languages).map((language) => (
        <li key={language}>{language}</li>
      ))}
    </ul>
    <img src={country.flags.png} alt={`flag of ${country.name.common}`}></img>
  </>
)

export default Country
