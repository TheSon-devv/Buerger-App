import React, { useState, useEffect } from 'react';
import Auxx from "../../hoc/Auxx";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OderSummary from '../../components/Burger/OderSummary/OderSummary';
import axios from "../../axios-orders";
import Test from '../Test/Test';
import Spinner from '../../components/UI/Spinner/Spinner';

// const initState = {
//     salad: 0,
//     bacon: 0,
//     cheese: 0,
//     meat: 0
// };

const TYPE_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 1,
    meat: 0.3
};


const BurgerBuilder = (props) => {
    const [ingredients, setIngredients] = useState(null);
    const [totalPrice, setTotalPrice] = useState(4);
    const [purchase, setPuchase] = useState(false);
    const [purchasing, setPuchasing] = useState(false);
    // const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const updatePurchase = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(
                igKey => {
                    return ingredients[igKey];
                }
            )
            .reduce((sum, el) => {
                return sum + el;
            })
        setPuchase(sum > 0);
    }


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
        updatePurchase(updateIngerdients);
    }

    const removeIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        console.log(oldCount);
        if (oldCount <= 0) {
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
        updatePurchase(updateIngerdients);
    }

    const disable = {
        ...ingredients
    }

    for (let key in disable) {
        disable[key] = disable[key] <= 0;
    }

    const purchasingHandler = () => {
        setPuchasing(true);
    }

    const modalClosed = () => {
        setPuchasing(!purchasing);
    }

    const cancelHandle = () => {
        setPuchasing(!purchasing);
    }

    const continueHandle = () => {

        // setLoading(true);

        // const order = {
        //     ingredients: ingredients,
        //     totalPrice: totalPrice,

        // }
        // axios.post('/oders.json', order)
        //     .then(res => setLoading(false))
        //     .catch(error => setLoading(false));

        const queryParams = [];
        for(let i in ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]));
            //equal property name and property value
        }
        const queryString = queryParams.join('&');

        props.history.push({
            pathname:'/checkout',
            search:'?' + queryString
        });

    }
    useEffect(() => {
        console.log(props)
        axios.get('/ingredients.json')
            .then(respone => {
                setIngredients(respone.data);
                console.log(respone);
            })
            .catch(error => console.log(error))
    }, [])

    let oderSummary = null;

    if (loading) {
        oderSummary = <Spinner />
    }

    let burger = <Spinner />;

    if (ingredients) {
        burger = (
            <Auxx>
                <Burger ingredients={ingredients} />
                <BuildControls
                    addIngredientsHandler={addIngredientsHandler}
                    removeIngredientsHandler={removeIngredientsHandler}
                    disable={disable}
                    price={totalPrice}
                    purchase={purchase}
                    purchasing={purchasingHandler}
                />
            </Auxx>
        );
        oderSummary = <OderSummary
            ingredients={ingredients}
            price={totalPrice}
            cancelHandle={cancelHandle}
            continueHandle={continueHandle}
        />
    }

    return (
        <Auxx>
            <Modal show={purchasing} modalClosed={modalClosed}>
                {oderSummary}
            </Modal>
            {burger}
            <Test />
        </Auxx>
    )
}

export default BurgerBuilder;
