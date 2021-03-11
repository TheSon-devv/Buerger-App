import React, { useState, useEffect } from 'react'
import CheckOutSummary from '../../components/CheckOutSummary/CheckOutSummary'
import axios from "../../axios-orders";

const CheckOut = (props) => {
    const [ingredients, setIngredients] = useState({
        meat: 1,
        salad: 1,
        bacon: 1,
        cheese: 1
    });

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const ingredient = {};

        for(let param of query.entries()){
            ingredient[param[0]] = +param[1];//convert string to number
            console.log(param,'asdas')
            //['salad','1']
        }

        setIngredients(ingredient);
    }, [])

    const checkOutContinueHandler = () => {
        props.history.replace('checkout/contact-data');
    }

    const checkOutCancelHandler = () => {
        props.history.goBack();
    }

    return (
        <div>
            <CheckOutSummary
                ingredients={ingredients}
                checkOutCancel={checkOutCancelHandler}
                checkOutContinue={checkOutContinueHandler}
            />
        </div>
    )
}

export default CheckOut
