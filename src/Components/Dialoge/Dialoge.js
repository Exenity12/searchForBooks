import React from 'react';
import  s from './Dialoge.module.css';
import Dialoges from './Users/Dialoges';
import Masseges from './Masseges/Masseges';


const Dialoge = (props) => {
  let DialodesElement = props.dialoges.map( d =>  <Dialoges users={d.users} name={d.name}/> );
  let MassegesElement = props.masseges.map( m =>  <Masseges masseges={m.masseges}/> );
  let NewMassegeBody = props.NewMassegeBody;


  const  sendMassageCreator = () => ({
    type: 'SAND-MASSAGE'
  });
  
  const updateNewMassageBody = (body) => {
    return {
      type: 'UPDATE-NEW-MASSAGE-BODY',
      body: body,
    }
  };



  let onNewMassageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMassageBody(body));
  };

  let onNewMassegeClick = () => {
    props.dispatch(sendMassageCreator());
  };


    return (
        <div className={s.Dialoge}>
          <div className={s.Dialoges}>
            { DialodesElement }
          </div>
          <div className={s.Masseges}>
            { MassegesElement }
          </div>
          <div>
            <div><textarea 
              value={NewMassegeBody}
              onChange={onNewMassageChange}
              placeholder='Enter your massage'></textarea></div>                                                    
            <div><button onClick={onNewMassegeClick}>Send</button></div>
          </div>
        </div>
    )
};

export default Dialoge