'use strict';

let {createStore, combineReducers, applyMiddleware} = require('redux');
import reporter from './redux-reporter';
import categoryReducer from '../reducer/category-reducer.js';
import expenseReducer from '../reducer/expense-reducer.js';

let reducers = combineReducers({category: categoryReducer, expense: expenseReducer});

let store = createStore(reducers, applyMiddleware(reporter));

// store.subscribe(() => {
//   console.log('__STATE__', store.getState());
// });
///store.getState
///store.disptach({type:'', payload:{}})

module.exports = store;
