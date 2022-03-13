import React from 'react';
import './WeeklyWeatherForecast.scss';
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";

const WeeklyWeatherForecast = ({weatherForecast}) => {

  let hourlyRate = weatherForecast.daily.map((el) => {
    return <WeatherIcon
      key={el.dt}
      icon={el.weather[0].icon}
      temp={el.temp}
      time={el.dt}
      offset={weatherForecast.timezone_offset}
      type={'day'}
      />
  })

return (
    <>
      <h2 className='weekly-weather-heading'>Weekly rate:</h2>
      <span className="weekly-weather-forecast">{hourlyRate}</span>
    </>
  )
}

export default WeeklyWeatherForecast;
