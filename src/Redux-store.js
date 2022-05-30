import { combineReducers, createStore } from "redux";
import { dialogsReducer, massegesReducer, newMassegeBodyReducer } from "./Reducer";

let reducers = combineReducers({
    MassengersPage: dialogsReducer, 
    masseges: massegesReducer, 
    PostsPage: newMassegeBodyReducer,
});


let store = createStore(reducers);


export default store; 