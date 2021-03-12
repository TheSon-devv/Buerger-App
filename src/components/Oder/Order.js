import React from 'react'
import classes from "./Order.module.css";

const Order = (props) => {
    // console.log(props);

    const ingredient = [];

    for (let igName in props.ingredients) {
        ingredient.push({
            name: igName,
            item: props.ingredients[igName]
        })
    }
    console.log(ingredient)

    const items = ingredient.map(e => (
        <span key={e.name}>{e.name}({e.item}) </span>
    ))
    return (
        <div className={classes.Order}>
            <span>Ingredients : {items}</span>
            <p>Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default Order
