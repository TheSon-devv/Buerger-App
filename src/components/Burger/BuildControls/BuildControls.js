import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from "./BuildControls.module.css";

const controls = [
    {label:"Meat",type:"meat"},
    {label:"Cheese",type:"cheese"},
    {label:"Salad",type:"salad"},
    {label:"Bacon",type:"bacon"}
];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl 
                key={ctrl.type} 
                label={ctrl.label} 
                type={ctrl.type}
                addIngredientsHandler={() => props.addIngredientsHandler(ctrl.type)}
                removeIngredientsHandler={() => props.removeIngredientsHandler(ctrl.type)}
                />
            ))}
        </div>
    )
}

export default BuildControls;