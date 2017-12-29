import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './lib/store';
import App from './component/app';

let view =() =>
  <Provider store={store}>
    <App />
  </Provider>

ReactDOM.render(view(), document.getElementById('root'));
