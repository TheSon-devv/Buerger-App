import React from 'react'
import classes from "./Order.module.css";

const Order = (props) => {
    // console.log(props);

    const ingredient = [];

    for (let igName in props.ingredients) {
        ingredient.push({
            nameFood: igName,
            item: props.ingredients[igName]
        })
    }

    const items = ingredient.map(e => (
        <span key={e.nameFood}>{e.nameFood}({e.item}) </span>
    ))


    const oderForm = [];

    for (let i in props.orderForm) {
        oderForm.push({
            id: i,
            item: props.orderForm[i],
        })
    }

    const order = oderForm.map(e => (
        <div key={e.id}>
            <h3>{e.item}</h3>
        </div>
    ))

    return (
        <div className={classes.Order}>
            {order}
            {/* {props.orderForm.name} */}
            <span>Ingredients : {items}</span>
            <p>Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default Order
