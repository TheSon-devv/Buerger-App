import { combineReducers } from "redux";
import ingredients from "./ingredients";
import auth from "./auth";

export const reducer = combineReducers({
    ingredients,
    auth
})