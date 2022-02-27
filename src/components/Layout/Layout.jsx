import React from 'react';
import './Layout.scss';
import Header from "../Header/Header.jsx";

const Layout = ({children}) => {
  return (
    <div className={'wrapper'}>
      <Header/>
      <main>
          {children}
      </main>
    </div>
  )
};

export default Layout;
