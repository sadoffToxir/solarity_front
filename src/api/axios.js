import axios from "axios";

export const apiKey = 'fa5e00b2984add359b2128827bdd23a1'
export const baseURL = 'https://api.openweathermap.org/data/2.5/';

const axiosInstance = axios.create({baseURL});

export default axiosInstance;
