import React from 'react';
import  './App.css';
import Component from './Components/Profile/Component';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Dialoge from './Components/Dialoge/Dialoge.js';
import { Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';


const Add = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div  className="app-wrapper-content"> 
        <Routes>
          <Route path="/Component/*" element= {<Component 
            addPost={props.addPost} 
            postNumber={props.appState.PostsPage.postNumber} 
            NewPostText={props.appState.PostsPage.NewPostText}
            updateNewPostText={props.updateNewPostText}/>}
          />
          <Route path="/Dialoge/*" element={<Dialoge dialoges={props.appState.MassengersPage.dialoges} masseges={props.appState.MassengersPage.masseges}/>}/>
          <Route path="/News/*" element= {<News />}/>
          <Route path="/Music/*" element={<Music />}/>
          <Route path="/Settings/*" element= {<Settings />}/>
        </Routes>
      </div>
    </div>
  );
};

export default Add