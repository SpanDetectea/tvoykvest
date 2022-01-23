import { combineReducers, createStore } from 'redux';

let reducer = combineReducers({
    gameSelection: gameSelectionReducer 
});

const store = createStore(reducer);

export default store;