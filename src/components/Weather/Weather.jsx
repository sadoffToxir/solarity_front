import React, {useEffect} from 'react';
import './Weather.scss';
import Layout from "../Layout/Layout.jsx";
import {useLocation, useNavigate} from "react-router";
import * as queryString from 'querystring';
import {useDispatch, useSelector} from "react-redux";
import WeatherIcon from "./WeatherIcon/WeatherIcon.jsx";
import HourlyWeatherForecast from "./HourlyWeatherForecast/HourlyWeatherForecast.jsx";
import WeatherDescription from "./WeatherDescription/WeatherDescription.jsx";
import WeeklyWeatherForecast from "./WeeklyWeatherForecast/WeeklyWeatherForecast.jsx";

const Weather = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const cityWeather = useSelector((state) => state.weatherReducer.cityWeather)

  let unixDateSunrise;
  let unixDateSunset;

  useEffect(() => {
    const params = queryString.parse(location.search.substr(1))
    if (!Object.keys(params).length) {
      navigate('/search')
    } else {
      dispatch({type: "LOAD_CITY_WEATHER", city: params.city});
    }
  }, [])

  if (cityWeather) {
    unixDateSunrise = new Date(cityWeather.sys.sunrise * 1000)
    unixDateSunset = new Date(cityWeather.sys.sunset * 1000)
  }

  return (
    <Layout>
      <h1>Weather</h1>
      <div className="forecast-wrapper">
        <div className='daily-weather-icon'>
          {
            cityWeather &&
            <WeatherIcon />
          }
        </div>
        <div className='hourly-weather'>
          <HourlyWeatherForecast/>
        </div>
        <div className='daily-weather-description'>
          <WeatherDescription />
          <p>Temperature: {cityWeather && Math.round(cityWeather.main.temp - 273.15)}&#176;</p>
          <p>Wind speed: {cityWeather && Math.round(cityWeather.wind.speed)}</p>
          <p>Weather: {cityWeather && cityWeather.weather[0].description}</p>
          <p>Humidity: {cityWeather && cityWeather.main.humidity}</p>
          <p>Sunrise: {cityWeather && cityWeather.sys.sunrise}</p>
          <p>Sunset: {cityWeather && cityWeather.sys.sunset}</p>
        </div>
        <div className='weekly-weather'>
          <WeeklyWeatherForecast />
        </div>
      </div>
    </Layout>
  )
}

export default Weather;
