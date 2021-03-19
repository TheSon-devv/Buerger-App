import React, { useState, useEffect } from 'react';
import { addIngredients, initIngredients, removeIngredients } from "../../actions/ingredients";
import { useSelector, useDispatch } from "react-redux";

import Auxx from "../../hoc/Auxx";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OderSummary from '../../components/Burger/OderSummary/OderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';


const BurgerBuilder = (props) => {
    const [purchasing, setPuchasing] = useState(false);
    const [loading, setLoading] = useState(false);

    const ingredient = useSelector(state => state.ingredients.ingredients)
    const totalPrice = useSelector(state => state.ingredients.totalPrice)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initIngredients())
    }, [])

    const updatePurchase = (ingredient) => {
        const sum = Object.keys(ingredient)
            .map(
                igKey => {
                    return ingredient[igKey];
                }
            )
            .reduce((sum, el) => {
                return sum + el;
            })
        return sum > 0;
    }


    const addIngredientsHandler = (ingName) => {
        dispatch(addIngredients(ingName))
    }

    const removeIngredientsHandler = (ingName) => {
        dispatch(removeIngredients(ingName))
    }

    const disable = {
        ...ingredient
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

        const queryParams = [];
        for (let i in ingredient) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredient[i]));
            //equal property name and property value
        }

        queryParams.push('price=' + totalPrice);
        const queryString = queryParams.join('&');

        props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });

    }

    let oderSummary = null;

    let burger = <Spinner />;

    if (ingredient) {
        burger = (
            <Auxx>
                <Burger ingredients={ingredient} />
                <BuildControls
                    addIngredientsHandler={addIngredientsHandler}
                    removeIngredientsHandler={removeIngredientsHandler}
                    disable={disable}
                    price={totalPrice}
                    purchase={updatePurchase(ingredient)}
                    purchasing={purchasingHandler}
                />
            </Auxx>
        );
        oderSummary = <OderSummary
            ingredients={ingredient}
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
        </Auxx>
    )
}

export default BurgerBuilder;
