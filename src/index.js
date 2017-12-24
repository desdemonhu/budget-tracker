'use strict';

let {createStore, combineReducers} = require('redux');
import categoryReducer from './reducer/category-reducer.js'

let reducers = combineReducers({category: categoryReducer,})
let store = createStore(reducers);

store.subscribe(() => {
  console.log('__STATE__', store.getState());
});


///store.getState
///store.disptach({type:'', payload:{}})

module.exports = store;
