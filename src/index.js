import ReactDom from 'react-dom';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import State, { addPost, subscribe, updateNewPostText } from './State';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

let rerenderEntireTree = () => {
    ReactDom.render(
        <BrowserRouter>
            <App appState={State} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter> , document.getElementById("root"));
}

rerenderEntireTree(State);
subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
