'use strict';

import {createStore} from 'redux';

let initState = [
                {name: 'travel'},
                {name: 'entertainment'}
              ];

///CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTORY
/// case 'string':
///   return state + change

const reducer = (state = initState, action) => {
  let {type, payload} = action;
  switch(type){
    case 'CATEGORY_CREATE':
      if(typeof payload.name === 'string'){
        payload.name = payload.name.toLowerCase();
      }
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      Object.keys(payload.update).map(key => {
        if(key === 'name'){
          state[payload.index][key] = payload.update[key].toLowerCase();
        }else {
          state[payload.index][key] = payload.update[key];
        }
      })
      return state;
    case 'CATEGORY_DESTORY':
      return state.filter(category => category.name !== payload.name);
  default:
    return state;
  }
};


export default reducer
