const Weather = ({capital, weatherData, image_url}) => {
  
    if (!weatherData) {
        return null
    }

    return (
      <div>
        <h2>Weather in {capital}</h2>
        <p>temperature {weatherData.main.temp} Celcius</p>
        <img src={image_url} alt={weatherData.weather[0].description}/>
        <p>wind {weatherData.wind.speed} m/s</p>
      </div>
    )
}

export default Weather