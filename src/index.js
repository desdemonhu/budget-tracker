'use strict';

let {createStore} = require('redux');
import categoryReducer from './reducer/category-reducer.js'


let store = {
  category: createStore(categoryReducer),

}

store.category.subscribe(() => {
  console.log('__STATE__', store.category.getState());
});


///store.getState
///store.disptach({type:'', payload:{}})

module.exports = store;
