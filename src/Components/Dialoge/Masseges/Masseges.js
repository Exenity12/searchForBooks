import React from 'react';
import  s from './Masseges.module.css';

const Masseges = (props) => {
    return (
      <div>
        <div className={s.item}>{props.masseges}</div>
      </div>
    )
};

export default Masseges