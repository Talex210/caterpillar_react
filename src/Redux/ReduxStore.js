import {combineReducers, createStore} from "redux";
import {headerReducer} from "./HeaderReducer";
import {GameAreaReducer} from "./GameAreaReducer";

let reducers = combineReducers({
    header: headerReducer,
    gameArea: GameAreaReducer
})

export let store = createStore(reducers)