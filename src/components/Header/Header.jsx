import React from 'react';
import './Header.scss';
import logo from '../../assets/images/fullLogo.png';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='main-header'>
      <div className="container">
        <Link
          to='/' >
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header;
