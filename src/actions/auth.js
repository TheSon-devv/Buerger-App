import * as actionTypes from "./actionType";
import axios from "axios";

export const authStart = () => {
    return {
        type : actionTypes.ACTION_AUTH.AUTH_START
    }
}
export const authSuccess = (token , userId) => {
    return {
        type : actionTypes.ACTION_AUTH.AUTH_SUCCESS,
        idToken : token , 
        userId : userId
    }
}

export const logOut = () => {
    return {
        type : actionTypes.ACTION_AUTH.AUTH_LOGOUT
    }
}

export const authLogOut = (exTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        }, exTime * 5)
    }
}


export const auth = (email,password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email : email,
            password : password,
            returnSecureToken : true
        }
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1nWEgDRLQ3keMW-zFClaQmhuAZtPPGNw`;
        if(!isSignup){
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1nWEgDRLQ3keMW-zFClaQmhuAZtPPGNw`
        }
        axios.post(url,authData)
            .then(res => {
                console.log(res);
                dispatch(authSuccess(res.data.idToken , res.data.localId));
                dispatch(authLogOut(res.data.expiresIn));
            })
            .catch(error => alert(error))
    }
}
