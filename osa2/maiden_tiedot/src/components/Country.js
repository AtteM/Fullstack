import { useState, useEffect } from "react"
import weatherService from "../services/weatherService"
import Weather from "./Weather"

const Country = ({country}) => {

    const languages = ('languages' in country) ? country.languages : {}
    const altName = `Flag of ${country.name.common}`
    const [weatherData, setWeatherData] = useState(null)
    const [weatherImageURL, setWeatherImageURL] = useState(null)

    useEffect(() => {
      weatherService
        .getLatLon(country.capital,country.cca2)
        .then(geocoding => {
            if (geocoding.length > 0) {
              getWeatherData(geocoding[0].lat,geocoding[0].lon)
            }
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

    return (
        <div>
          <h1>{country.name.common}</h1>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <p><b>languages:</b></p>
          <ul>
            {Object.keys(languages).map(key =><li key={key}>{languages[key]}</li>)}
          </ul>
          <img style={{ width: "10%", height: "10%" }} src={country.flags.png} alt={altName}></img>
          <Weather capital={country.capital} weatherData={weatherData} image_url={weatherImageURL}/>
        </div>
    )
}

export default Country