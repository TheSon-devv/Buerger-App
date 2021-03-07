import React,{useState} from 'react';
import Auxx from "../../hoc/Auxx";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const initState = {
    salad : 0,
    bacon : 0,
    cheese :0,
    meat : 0
}

const TYPE_PRICE = {
    salad : 0.5 ,
    bacon : 0.7 , 
    cheese : 1 ,
    meat : 0.3 
}

const BurgerBuilder = () => {
    const [ingredients,setIngredients] = useState(initState);
    const [totalPrice,setTotalPrice] = useState(4);


    const addIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngerdients = {
            ...ingredients
        }
        updateIngerdients[type] = updateCount;
        const priceAddition = TYPE_PRICE[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + priceAddition;
        setTotalPrice(newPrice);
        setIngredients(updateIngerdients);
    }

    const removeIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        console.log(oldCount);
        if(oldCount <= 0 ){
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngerdients = {
            ...ingredients
        } 
        updateIngerdients[type] = updateCount;
        const priceRemove = TYPE_PRICE[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - priceRemove;
        setTotalPrice(newPrice);
        setIngredients(updateIngerdients);
    }

    return (
        <Auxx>
            <Burger ingredients={ingredients}/>
            <BuildControls 
            addIngredientsHandler={addIngredientsHandler}
            removeIngredientsHandler={removeIngredientsHandler}
            />
        </Auxx>
    )
}

export default BurgerBuilder;
