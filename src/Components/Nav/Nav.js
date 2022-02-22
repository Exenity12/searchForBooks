import React from 'react';
import  s from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="Component" className = { navData => navData.isActive ? s.activeLink : s.item }>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="Dialoge" className = { navData => navData.isActive ? s.activeLink : s.item }>Message</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to="Music" className = { navData => navData.isActive ? s.activeLink : s.item }>Music</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to="News" className = { navData => navData.isActive ? s.activeLink : s.item }>News</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <NavLink to="Settings" className = { navData => navData.isActive ? s.activeLink : s.item }>Settings</NavLink>
        </div>
      </nav>
    )
};

export default Nav