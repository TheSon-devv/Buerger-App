import React from 'react'
import Burger from '../../Burger/Burger'
import Button from "../../UI/Button/Button";
import classes from "./CheckOutSummary.module.css";

const CheckOutSummary = props => {
    return (
        <div className={classes.CheckOutSummary}>
            <h1>Thật hấp dẫn phải không !!!</h1>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkOutCancel}
            >CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.checkOutContinue}
            >CONTINUE</Button>
        </div>
    )
}

export default CheckOutSummary

