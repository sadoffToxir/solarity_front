import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import './App.scss';
import Page404 from "./components/404/404.jsx";
import Weather from "./components/Weather/Weather.jsx";

const App = () => {
  return (
    <Routes>
      <Route path='/search' exact element={<Main/>}/>
      <Route path='/weather' exact element={<Weather/>}/>
      <Route path='/' exact element={<Navigate to={"/search"} />}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
  )
}

export default App;
