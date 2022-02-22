import React from 'react';
import  s from './Dialoge.module.css';
import Dialoges from './Users/Dialoges';
import Masseges from './Masseges/Masseges';


const Dialoge = (props) => {
  let DialodesElement = props.dialoges.map( d =>  <Dialoges users={d.users} name={d.name}/> );
  let MassegesElement = props.masseges.map( m =>  <Masseges masseges={m.masseges}/> );

    return (
        <div className={s.Dialoge}>
          <div className={s.Dialoges}>
            { DialodesElement }
          </div>
          <div className={s.Masseges}>
            { MassegesElement }
          </div>
        </div>
    )
};

export default Dialoge