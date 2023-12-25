import { FC } from 'react';
import './Header.scss';
import logo from './assets/logo.png';
import { NavBar } from '../UI/NavBar';
import heart from './assets/heart.svg';
import { NavLink } from 'react-router-dom';

export const Header:FC = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='header__logo'>
        <img src={logo} alt="logo" className='header__logo-image'/>
      </NavLink>
      <NavBar />
      <div className='buttons'>
        <NavLink to='/favorites' className='buttons__like'>
          <img src={heart} alt="favorites button" />
        </NavLink>
        <button className='buttons__signup'>sign in</button>
      </div>
    </header>
  );
};
