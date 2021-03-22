import { ACTION_AUTH } from "../actions/actionType";

const initState = {
    token: null,
    userId: null,
    loading: false
}

const auth = (state = initState, action) => {
    switch (action.type) {
        case ACTION_AUTH.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case ACTION_AUTH.AUTH_SUCCESS:
            return {
                ...state,
                token: action.idToken,
                userId: action.userId,
                loading: false,
                userId : localStorage.getItem('userId')
            }
        case ACTION_AUTH.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                loading: false
            }
        case ACTION_AUTH.AUTH_FAIL:
            return {
                ...state,
                token: null,
                userId: null,
                loading: true
            }
        default:
            return state;
    }
}

export default auth;