import { useState, useEffect } from "react"
import weatherService from "../services/weatherService"

const Country = ({country}) => {

    const altName = `Flag of ${country.name.common}`
    const [weatherData, setWeatherData] = useState(null)
    const [weatherImageURL, setWeatherImageURL] = useState(null)

    useEffect(() => {
      weatherService
        .getLatLon(country.capital,country.cca2)
        .then(geocoding => {
          getWeatherData(geocoding[0].lat,geocoding[0].lon)
        })
    }, [])

    const getWeatherData = (lat,lon) => {
      weatherService
        .getCurrentWeather(lat,lon)
        .then(data => {
          setWeatherData(data)
          setWeatherImageURL(`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
        })
    }

    if (!weatherData) {
      return null
    }

    return (
        <div>
          <h1>{country.name.common}</h1>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <p><b>languages:</b></p>
          <ul>
            {Object.keys(country.languages).map(key =><li key={key}>{country.languages[key]}</li>)}
          </ul>
          <img style={{ width: "10%", height: "10%" }} src={country.flags.png} alt={altName}></img>
          <h2>Weather in {country.name.common}</h2>
          <p>temperature {weatherData.main.temp} Celcius</p>
          <img src={weatherImageURL} />
          <p>wind {weatherData.wind.speed} m/s</p>
        </div>
    )
}

export default Country