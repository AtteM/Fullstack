import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY

const getLatLon = (cityName, countryCode) => {
  const request = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=1&appid=${api_key}`)
  return request.then(response => response.data)
}

const getCurrentWeather = (lat,lon) => {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
  return request.then(response => response.data)
}

const weatherService = {
  getLatLon,
  getCurrentWeather
}

export default weatherService