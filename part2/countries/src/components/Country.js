import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const [lat, lon] = country.latlng
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => {
        setWeather({
          temp: data.main.temp,
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          alt: data.weather[0].description,
          wind: data.wind.speed,
        })
      })
  }, [])

  return (
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
      <br />
      <h2>Weather in {country.capital}</h2>
      {weather ? (
        <>
          <p>temperature {weather.temp} Celcius</p>
          <img
            src={weather.icon}
            alt={`icon representing ${weather.alt}`}
          ></img>
          <p>wind {weather.wind} m/s</p>
        </>
      ) : (
        <div>loading ...</div>
      )}
    </>
  )
}

export default Country
