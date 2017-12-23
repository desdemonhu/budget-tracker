import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './index.js';
import App from './component/app';

let view =() =>
  <Provider store={store.category}>
    <App />
  </Provider>

ReactDOM.render(view(), document.getElementById('root'));
