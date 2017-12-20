'use strict';

let {createStore} = require('redux');
import categoryReducer from './reducer/category-reducer.js'


let store = {
  category: createStore(categoryReducer),

}

store.category.subscribe(() => {
  console.log('__STATE__', store.category.getState());
});

store.category.dispatch({type: 'CATEGORY_CREATE', payload:{name: 'taco'}});
store.category.dispatch({type: 'CATEGORY_UPDATE', payload:{index: 1, update:{name: 'Sammich'}}});
store.category.dispatch({type: 'CATEGORY_DESTORY', payload: {name: 'taco'}})
///store.getState
///store.disptach({type:'', payload:})
