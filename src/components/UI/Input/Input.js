import React from 'react'
import classes from "./Input.module.css";

const Input = (props) => {
    let inputEmlement = null;

    switch(props.inputtype){
        case('input'):
            inputEmlement = <input name={props.name} onChange={props.onChange} value={props.value} className={classes.InputElement} {...props}/>;
            break;
        case('textarea'):
            inputEmlement = <textarea name={props.name} onChange={props.onChange} value={props.value} className={classes.InputElement} {...props}/>;
            break;
        default:
            inputEmlement = <input name={props.name} onChange={props.onChange} value={props.value} className={classes.InputElement} {...props}/>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputEmlement}
        </div>
    )
}


export default Input
