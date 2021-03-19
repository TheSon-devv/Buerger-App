import { combineReducers } from "redux";
import ingredients from "./ingredients";
import auth from "./auth";
import order from "./order";

export const reducer = combineReducers({
    ingredients,
    auth,
    order
})