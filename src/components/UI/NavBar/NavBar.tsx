/* eslint-disable max-len */
import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';


export const NavBar: FC = () => {
  return (
    <nav>
      <ul className='navbar'>
        <li>
          <NavLink
            className={
              ({ isActive }) => classNames('navbar__item', { 'is-active': isActive })
            }
            to="/"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              ({ isActive }) => classNames('navbar__item', { 'is-active': isActive })
            }
            to="/tours"
          >
            tours
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              ({ isActive }) => classNames('navbar__item', { 'is-active': isActive })
            }
            to="/about"
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              ({ isActive }) => classNames('navbar__item', { 'is-active': isActive })
            }
            to="/help"
          >
            help
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
