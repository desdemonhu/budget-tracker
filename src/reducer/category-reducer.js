'use strict';

import {createStore} from 'redux';

let initState = [
                {name: 'travel'},
                {name: 'entertainment', id: 'hhh'}
              ];

///CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTORY
/// case 'string':
///   return state + change

const reducer = (state = initState, action) => {
  let {type, payload} = action;
  switch(type){
    ///payload: {name: 'name', etc}
    case 'CATEGORY_CREATE':
      if(typeof payload.name === 'string'){
        payload.name = payload.name.toLowerCase();
      }
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      ///payload: {id: 'uuid', update:{name: 'name'}}
      let index = state.findIndex(value => {
        return value.id === payload.id
      })
    if(index > -1){
      Object.keys(payload.update).map(key => {
        if(key === 'name'){
          state[index][key] = payload.update[key].toLowerCase();
        }else {
          state[index][key] = payload.update[key];
        }
      })
      } else {
        console.log('Item not found');
      }
      return state;
    case 'CATEGORY_DESTORY':
      return state.filter(category => category.name !== payload.name);
  default:
    return state;
  }
};


export default reducer
