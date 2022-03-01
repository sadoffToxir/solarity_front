import axiosInstance, {apiKey} from "./axios";

export const getWeatherForecast = (lat, lon) => {
  return axiosInstance.get(`onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then((res) => res.data)
}

export const getCurrentWeather = (city) => {
  return axiosInstance.get(`find?q=${city}&appid=${apiKey}`)
    .then((res) => res.data)
}
