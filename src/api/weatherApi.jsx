import axiosInstance, {apiKey, baseURL} from "./axios";

export const getWeatherForecast = (lat, lon) => {
  return axiosInstance.get(`onecall?lat=${lat}&lon=${lon}%exclude=daily&appid=${apiKey}`)
    .then((res) => res.data)
}
