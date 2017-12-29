export default store => next => action => {
    try {
        console.log('__ACTION__', action);
        next(action);
        console.log('__STATE__', store.getState());
        
    }catch(err) {
        console.error(err);
    }
    
    
}