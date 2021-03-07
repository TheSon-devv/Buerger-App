import React from 'react'
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    let t = Object.keys(props.ingredients)
    .map(
        igKey => {
            return [...Array(props.ingredients[igKey])]
            .map(
                (_, i) => { 
                    return <BurgerIngredient key={igKey + i } type={igKey}/>;
                }
            );
        }
    )
    .reduce((arr,el) => {
        return arr.concat(el);
    },[])

    if(t.length === 0 ){
        t = <p>Please start adding ingredient !</p>
    }
    console.log(t)
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {t}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;
