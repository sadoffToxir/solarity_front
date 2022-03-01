import { put, takeEvery } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import {getCurrentWeather, getWeatherForecast} from "../../api/weatherApi.js";
import {cityWeatherSet} from "../actions/weatherActions";

export function* requestCityWeather(args) {
  const longAndLat = yield getCurrentWeather(args.city)
  const data = yield getWeatherForecast(longAndLat.list[0].coord.lat, longAndLat.list[0].coord.lon)
  yield put(cityWeatherSet(data))
}

export function* watchRequestSaga() {
  yield takeEvery('LOAD_CITY_WEATHER', requestCityWeather);
}

export default function* rootSaga() {
  yield watchRequestSaga();
}
