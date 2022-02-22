import React from 'react';
import { NavLink } from 'react-router-dom';
import  s from './Dialoges.module.css';

const Dialoges = (props) => {
    return (
      <div>
        <NavLink to={props.users}>{props.name}</NavLink>
      </div>
    )
};

export default Dialoges