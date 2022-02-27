import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

const AppContainer = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
}

ReactDOM.render(<AppContainer/>, document.getElementById('root'))
