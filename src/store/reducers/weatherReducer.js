const initialState = {
  city: '',
  cityWeatherForecast: null
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CITY_WEATHER_SET':
      return {
        ...state,
        cityWeatherForecast: action.payload
      }
    default:
      return state
  }
}

