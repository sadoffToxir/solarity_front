import React from 'react';
import './WeatherIcon.scss';
import {dateFormatter} from "../../../utils/dateFormatter";

const WeatherIcon = ({icon, temp, time, offset, type = 'default'}) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const unixDate = new Date((time + offset) * 1000)
  const weatherDate = type === 'default' ? dateFormatter(unixDate) : days[unixDate.getDay()]
  console.log(unixDate.getMonth())
  return (
    <div className={'weather-icon-wrapper'}>
      <div className={'weather-icon-time'}>
        {weatherDate}
      </div>
      <img
        className='weather-icon'
        src={`https://raw.githubusercontent.com/CodeExplainedRepo/Weather-App-JavaScript/master/icons/${icon}.png`}
        alt=""/>
      <div className='weather-icon-temperature'>
        {
          type === 'default' ?
            <>
              {Math.round(temp - 273.15)}&#176;
            </>
            :
            <>
              <span className={'weather-icon-max'}>{Math.round(temp.max - 273.15)}&#176;</span>
              <span className={'weather-icon-min'}>{Math.round(temp.min - 273.15)}&#176;</span>
            </>
        }
      </div>
    </div>
  )
}

export default WeatherIcon;
