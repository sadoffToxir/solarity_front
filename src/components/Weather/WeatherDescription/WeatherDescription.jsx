import React from 'react';
import './WeatherDescription.scss';
import {dateFormatter} from "../../../utils/dateFormatter";

const WeatherDescription = ({weatherForecast}) => {

  const unixDateSunrise = new Date((weatherForecast.current.sunrise + weatherForecast.timezone_offset) * 1000)
  const unixDateSunset = new Date((weatherForecast.current.sunset + weatherForecast.timezone_offset) * 1000)

  return (
    <>
      <p>
        Temperature: <span
        className={"weather-description-data"}>{Math.round(weatherForecast.current.temp - 273.15)}&#176;</span></p>
      <p>Wind speed: <span
        className={"weather-description-data"}>{Math.round(weatherForecast.current.wind_speed)}</span></p>
      <p>Weather: <span className={"weather-description-data"}>{weatherForecast.current.weather[0].description}</span>
      </p>
      <p>Humidity: <span className={"weather-description-data"}>{weatherForecast.current.humidity}</span></p>
      <p>Sunrise: <span
        className={"weather-description-data"}>{dateFormatter(unixDateSunrise)}</span>
      </p>
      <p>Sunset: <span
        className={"weather-description-data"}>{dateFormatter(unixDateSunset)}</span>
      </p>
    </>
  )
}

export default WeatherDescription;
