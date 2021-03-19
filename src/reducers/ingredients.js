import { ACTION_TYPE_INGREDIENTS } from "../actions/actionType";

const initialState = {
    ingredients: null,
    totalPrice: 0
};

const TYPE_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 1,
    meat: 0.3
};

const ingredients = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_INGREDIENTS.FETCH_ALL:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients
                }
            }
        case ACTION_TYPE_INGREDIENTS.ADD:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + TYPE_PRICE[action.ingredientName]
            }
        case ACTION_TYPE_INGREDIENTS.REMOVE:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - TYPE_PRICE[action.ingredientName]
            }
        case ACTION_TYPE_INGREDIENTS.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad : action.ingredients.salad,
                    bacon : action.ingredients.bacon,
                    cheese : action.ingredients.cheese,
                    meat : action.ingredients.meat
                },
                totalPrice : 0
            };
        default:
            return state;
    }
}

export default ingredients;
