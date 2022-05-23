import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './NavBar.module.scss';

export const NavBar: React.FC<any> = () => (
  <div className={s.navBar}>
    <div className={s.navBar_content}>
      <div className={s.navbar}>
        <NavLink
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          to="Main"
        >
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          to="Calls"
        >
          Звонки
        </NavLink>
      </div>
    </div>
  </div>
);
