'use strict';

import {createStore} from 'redux';

let initState = [];

///CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTORY
/// case 'string':
///   return state + change

const reducer = (state = initState, action) => {
  let {type, payload} = action;
  switch(type){
    ///payload: {name: 'name', etc}
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      ///payload: {key: 'uuid', update:{name: 'name'}}
      return state.map(item => item.key === payload.key ? payload.update : item)
    case 'CATEGORY_DESTORY':
    ///payload: {key: uuid}
      return state.filter(category => category.key !== payload.key);
  default:
    return state;
  }
};


export default reducer
