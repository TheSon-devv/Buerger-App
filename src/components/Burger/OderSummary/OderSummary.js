import React from 'react'
import Auxx from '../../../hoc/Auxx'
import Button from '../../UI/Button/Button'

const OderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(
            igKey => {
                return (
                    <li key={igKey}>
                        {igKey} : {props.ingredients[igKey]}
                    </li>
                )
            }
        )
    return (
        <Auxx>
            <h3>Your Oder</h3>
            <p>Cac mon da oder la : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong>Total Price : {Number.parseFloat(props.price.toFixed(2))} $</strong></p>
            <Button
                btnType="Danger"
                clicked={props.cancelHandle}
            >CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.continueHandle}
            >CONTINUE</Button>
        </Auxx>
    )
}

export default OderSummary
