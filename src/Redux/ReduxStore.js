import {combineReducers, createStore} from "redux";
import {headerReducer} from "./HeaderReducer";

let reducers = combineReducers({
    header: headerReducer
})

export let store = createStore(reducers)