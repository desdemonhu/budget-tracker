export default store => next => action => {
  try {
    console.log('__ACTION__', action);
    let result = next(action); ///log the action regardless if this throws an error or not
    console.log('__STATE__', store.getState());
    return result;  
  }catch(error) {
    action.error = error;
    console.error(error);
    return action;
  }
    
    
};