import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";
import {weatherReducer} from "./reducers/weatherReducer";

const sagaMiddleware = createSagaMiddleware();

const roootReducers = combineReducers( {
  weatherReducer: weatherReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(roootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;
