import { put, takeEvery } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import {getWeatherForecast} from "../../api/weatherApi.jsx";
import {cityWeatherSet} from "../actions/weatherActions";

export function* requestCityWeather(args) {
  const data = yield getWeatherForecast(args.city)
  yield put(cityWeatherSet(data))
}

export function* watchRequestSaga() {
  yield takeEvery('LOAD_CITY_WEATHER', requestCityWeather);
}

export default function* rootSaga() {
  yield watchRequestSaga();
}
