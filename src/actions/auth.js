import * as actionTypes from "./actionType";
import axios from "axios";

export const authStart = () => {
    return {
        type: actionTypes.ACTION_AUTH.AUTH_START
    }
}
export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.ACTION_AUTH.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresTime');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.ACTION_AUTH.AUTH_LOGOUT
    }
}

export const authLogOut = (exTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        }, exTime * 1000)
    }
}


export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1nWEgDRLQ3keMW-zFClaQmhuAZtPPGNw`;
        if (!isSignup) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1nWEgDRLQ3keMW-zFClaQmhuAZtPPGNw`
        }
        axios.post(url, authData)
            .then(res => {
                console.log(res);
                const expriesTime = new Date(new Date().getTime() + (res.data.expiresIn * 100))
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expiresTime', expriesTime);
                localStorage.setItem('userId', res.data.localId);

                dispatch(authSuccess(res.data.idToken, res.data.localId));
                dispatch(authLogOut(res.data.expiresIn));
            })
            .catch(error => alert(error))
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logOut())
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expiresTime'));
            if (expirationDate <= new Date()) {
                dispatch(logOut())
            }
            else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(authLogOut((expirationDate.getTime() - new Date().getTime()) / 1000));
                if(userId == "dGJauN9qgQRflzq9vmcNrLdMsZk2"){
                    alert("Xin chào Thế Sơn")
                }
            }
        }
    }
}
