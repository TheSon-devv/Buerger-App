import React, { useState, useEffect } from 'react'
import CheckOutSummary from '../../components/Oder/CheckOutSummary/CheckOutSummary'
import { Redirect, Route } from "react-router-dom";
import ContactData from './ContactData/ContactData';
import { useSelector, useDispatch } from "react-redux";
import { purchaseInit } from "../../actions/order";

const CheckOut = (props) => {
    const ingredient = useSelector(state => state.ingredients.ingredients)
    const totalPrice = useSelector(state => state.ingredients.totalPrice)
    const purchased = useSelector(state => state.order.purchased)

    const dispatch = useDispatch();

    useEffect(() => {

        const query = new URLSearchParams(props.location.search);
        const ingredient = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = +param[1];
            }
            else {
                ingredient[param[0]] = +param[1];//convert string to number
                //['salad','1']
            }
        }

        return ( () => {
            dispatch(purchaseInit())
        })

    }, [])

    const checkOutContinueHandler = () => {
        props.history.replace('checkout/contact-data');
    }

    const checkOutCancelHandler = () => {
        props.history.goBack();
    }

    let summary = <Redirect to="/"/>
    if (ingredient) {
        const purchasedRedirect = purchased ? <Redirect to="/"/> : null
        summary = (
            <>
                {purchasedRedirect}
                <CheckOutSummary
                    ingredients={ingredient}
                    checkOutCancel={checkOutCancelHandler}
                    checkOutContinue={checkOutContinueHandler}
                />
                <Route path={props.match.path + '/contact-data'}
                    render={
                        (props) => (<ContactData ingredients={ingredient} price={totalPrice} {...props} />)
                    }
                />
            </>
        )
    }


    return summary
}

export default CheckOut
