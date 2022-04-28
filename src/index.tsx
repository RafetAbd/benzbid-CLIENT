import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import history from './history'
// import './index.css';
import App from './App';

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