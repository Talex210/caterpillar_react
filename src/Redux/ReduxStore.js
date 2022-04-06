import {combineReducers, createStore} from "redux";
import {GameAreaReducer} from "./GameAreaReducer";

let reducers = combineReducers({
    gameArea: GameAreaReducer
})

export let store = createStore(reducers)