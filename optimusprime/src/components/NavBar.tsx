import React from 'react';
import logo from '../images/monni.png'
import './navbar.css';

export const  NavBar = () => {
    return (
        <>
      <div className='Nav'>
        <img src={logo} alt='Logo' />
      </div>
    </>
    );
}