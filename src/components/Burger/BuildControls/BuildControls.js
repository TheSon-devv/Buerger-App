import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from "./BuildControls.module.css";

const controls = [
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" }
];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Price : <strong>{props.price.toFixed(2)} $</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.type}
                    label={ctrl.label}
                    type={ctrl.type}
                    addIngredientsHandler={() => props.addIngredientsHandler(ctrl.type)}
                    removeIngredientsHandler={() => props.removeIngredientsHandler(ctrl.type)}
                    disable={props.disable[ctrl.type]}
                />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchase}
                onClick={props.purchasing}
            >
                {props.isAuthentication ? 'ORDER NOW' : 'Sign in to order'}
            </button>
        </div>
    )
}

export default BuildControls;
