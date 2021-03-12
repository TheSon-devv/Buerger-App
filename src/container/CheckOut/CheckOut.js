import React, { useState, useEffect } from 'react'
import CheckOutSummary from '../../components/Oder/CheckOutSummary/CheckOutSummary'
import axios from "../../axios-orders";
import { Route } from "react-router-dom";
import ContactData from './ContactData/ContactData';

const CheckOut = (props) => {
    const [ingredients, setIngredients] = useState(null);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        // axios.get('/ingredients.json')
        //     .then(respone => {
        //         setIngredients(respone.data);
        //         console.log(respone);
        //     })
        //     .catch(error => console.log(error));


        const query = new URLSearchParams(props.location.search);
        const ingredient = {};
        let price = 0;
        for (let param of query.entries()) {
            console.log(param, 'asdas')
            if (param[0] === 'price') {
                price = +param[1];
            }
            else {
                ingredient[param[0]] = +param[1];//convert string to number
                //['salad','1']
            }
        }

        setIngredients(ingredient);
        setPrice(price);

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
            <Route path={props.match.path + '/contact-data'}
                render={
                    (props) => (<ContactData ingredients={ingredients} price={price} {...props} />)
                }
            />
        </div>
    )
}

export default CheckOut
