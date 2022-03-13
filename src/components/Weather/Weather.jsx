import React, {useEffect, useState} from 'react';
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowResize = (e) => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    if (!Object.keys(params).length) {
      navigate('/')
    } else {
      dispatch({type: "LOAD_CITY_WEATHER", city: params.city});
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', windowResize)
    return () => {
      window.removeEventListener('resize', windowResize)
    }
  }, [window])

  const dailyWeatherIcon = <div className='daily-weather-icon'>
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

  const dailyWeatherDescription = <div className='daily-weather-description'>
    {
      cityWeatherForecast &&
      <WeatherDescription
        weatherForecast={cityWeatherForecast}
      />
    }
  </div>

  const hourlyWeatherRate = <div className='hourly-weather'>
    {
      cityWeatherForecast &&
      <HourlyWeatherForecast
        weatherForecast={cityWeatherForecast}/>
    }
  </div>

  return (
    <Layout>
      <h1>{params.city[0].toUpperCase() + params.city.slice(1)}</h1>
      <div className="forecast-wrapper">

        {
          windowWidth > 1100
            ? (
              <>
                {dailyWeatherIcon}
                {hourlyWeatherRate}
                {dailyWeatherDescription}
              </>
            )
            : (
              <>
                <div className="selected-day-weather">
                  {dailyWeatherIcon}
                  {dailyWeatherDescription}
                </div>
                {hourlyWeatherRate}
              </>
            )
        }

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
