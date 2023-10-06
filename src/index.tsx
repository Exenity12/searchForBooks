import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './Redux-store';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>
  </React.StrictMode>
);