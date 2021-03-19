import React, { useState } from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import classes from "./Auth.module.css";
import axios from '../../axios-orders';
import { auth } from "../../actions/auth";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

export const Auth = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [isSignup, setIsSignup] = useState(true);

    const loading = useSelector(state => state.auth.loading)
    console.log(loading)

    const dispatch = useDispatch();

    const onSubmit = (data, e) => {
        e.target.reset();

        dispatch(auth(data.email, data.password, isSignup))
    }

    const onSubmitToSignIn = (data, e) => {
        // e.preventDefault();
        setIsSignup(!isSignup);
    }


    return (
        <>
            {loading ? <Spinner /> :
                (
                    <>
                        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>

                            <input type="email" name="email" placeholder="Email" ref={register} className={classes.input} />
                            {/* {_.get("email.type", errors) === "pattern" && (
                    <p>Vui lòng nhập đúng định dạng</p>
                    )} */}
                            <input type="password" name="password" placeholder="Password (6-8 ký tự)" ref={register({ required: true, minLength: 6, maxLength: 8 })} className={classes.input} />
                            {_.get("password.type", errors) === "minLength" && (
                                <p>Tối thiểu 6 ký tự</p>
                            )}
                            {_.get("password.type", errors) === "maxLength" && (
                                <p>Tối đa 8 ký tự</p>
                            )}
                            {_.get("password.type", errors) === "required" && (
                                <p>Vui lòng nhập password</p>
                            )}
                            <button type="submit" className={classes.button}>Submit</button>
                        </form>
                        <div className={classes.buttonSwitch}>
                            <button type="button" className={classes.button} onClick={onSubmitToSignIn}>Switch to {isSignup ? 'SIGN IN' : 'SIGN UP'}</button>
                        </div>
                    </>
                )
            }
        </>
    );
}