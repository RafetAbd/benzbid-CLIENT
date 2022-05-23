import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
// import history from './history'
import io from 'socket.io-client';
// import './index.css';
import App from './App';

const socket = io('http://localhost:1337',
{
  transports: ['websocket'],
  upgrade: false
});

socket.on('connect', () => {
  console.log('connected to server');

});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);