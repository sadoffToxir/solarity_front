import React from 'react';
import './HourlyWeatherForecast.scss';
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";

const HourlyWeatherForecast = ({weatherForecast}) => {

  let hourlySortedForecasts = [];
  for (let i = 0; i < weatherForecast.hourly.length; i+= 3) {
    hourlySortedForecasts.push(weatherForecast.hourly[i])
  }
  hourlySortedForecasts = hourlySortedForecasts.slice(0,8);

  let hourlyRate = hourlySortedForecasts.map((el) => {
    return <WeatherIcon
      key={el.dt}
      icon={el.weather[0].icon}
      temp={el.temp}
      time={el.dt}
      offset={weatherForecast.timezone_offset}
    />
  })

  return (
    <>
      <h2 className='hourly-weather-heading'>Hourly rate:</h2>
      <span className="hourly-weather-forecast">{hourlyRate}</span>
    </>
  )
}

export default HourlyWeatherForecast;
