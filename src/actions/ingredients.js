import * as actions from "./actionType";
import axios from "../axios-orders";

export const addIngredients = (name) => {
    return {
        type: actions.ACTION_TYPE_INGREDIENTS.ADD,
        ingredientName: name
    }
}

export const removeIngredients = (name) => {
    return {
        type: actions.ACTION_TYPE_INGREDIENTS.REMOVE,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actions.ACTION_TYPE_INGREDIENTS.SET_INGREDIENTS,
        ingredients: ingredients
    }
}
export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data))
            })
            .catch(error => alert(error))
    }
}
