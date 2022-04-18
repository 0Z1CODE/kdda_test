import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './assets/scss/index.scss';

const target = document.getElementById('root');
const cover = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

render(cover, target);
