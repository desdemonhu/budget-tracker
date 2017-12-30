'use strict';

let initState = [];

///CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTORY
/// case 'string':
///   return state + change

///Validation for creating an item
let validateExpense = function(payload){
  //no category selected
  if(!payload.name){
    console.log('no payload name');
    throw new Error('Title field is empty');
  }
};

const reducer = (state = initState, action) => {
  let {type, payload} = action;
  switch(type){
  ///payload: {name: 'name', etc}
  case 'EXPENSE_CREATE':
    validateExpense(payload);
    return [...state, payload];
  case 'EXPENSE_UPDATE':
    ///payload: {key: 'uuid', update:{name: 'name'}}
    validateExpense(payload.update);
    return state.map(item => item.key === payload.key ? payload.update : item);
  case 'EXPENSE_DESTORY':
    ///payload: uuid
    return state.filter(category => category.key !== payload);
  default:
    return state;
  }
};


export default reducer;
