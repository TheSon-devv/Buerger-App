import React from 'react'
import Auxx from '../../../hoc/Auxx'

const OderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(
            igKey => {
                return(
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
        </Auxx>
    )
}

export default OderSummary
