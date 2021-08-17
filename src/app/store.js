import { createStore, combineReducers } from "redux";
import { counterReduxReducer } from "../features/counterRedux/counterReduxSlice";
import { counterImmerReducer } from "../features/counterImmerjs/counterImemerSlice";

export const store = createStore(combineReducers({
    counterRedux: counterReduxReducer,
    counterImmer: counterImmerReducer
}));