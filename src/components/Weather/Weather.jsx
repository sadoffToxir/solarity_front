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

  const params = queryString.parse(location.search.substr(1));
  const cityWeatherForecast = useSelector((state) => state.weatherReducer.cityWeatherForecast)

  useEffect(() => {
    if (!Object.keys(params).length) {
      navigate('/')
    } else {
      dispatch({type: "LOAD_CITY_WEATHER", city: params.city});
    }
  }, [])

  return (
    <Layout>
      <h1>{params.city[0].toUpperCase() + params.city.slice(1)}</h1>
      <div className="forecast-wrapper">
        <div className='daily-weather-icon'>
          {
            cityWeatherForecast &&
            <WeatherIcon
              icon={cityWeatherForecast.current.weather[0].icon}
              temp={cityWeatherForecast.current.temp}
              time={cityWeatherForecast.current.dt}
              offset={cityWeatherForecast.timezone_offset}
            />
          }
        </div>
        <div className='hourly-weather'>
          {
            cityWeatherForecast &&
            <HourlyWeatherForecast
              weatherForecast={cityWeatherForecast}/>
          }
        </div>
        <div className='daily-weather-description'>
          {
            cityWeatherForecast &&
            <WeatherDescription
              weatherForecast={cityWeatherForecast}
            />
          }
        </div>
        <div className='weekly-weather'>
          {
            cityWeatherForecast &&
            <WeeklyWeatherForecast
              weatherForecast={cityWeatherForecast}
            />
          }
        </div>
      </div>
    </Layout>
  )
}

export default Weather;
