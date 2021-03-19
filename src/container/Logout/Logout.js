import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router';
import { logOut } from "../../actions/auth";

const Logout = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logOut());
        alert("Logout Successfull")
    }, [])
    return (
        <Redirect to="/auth"/>
    )
}

export default Logout
