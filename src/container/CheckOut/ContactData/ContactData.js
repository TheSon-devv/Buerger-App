import React, { useState } from 'react'
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner';

const initState = {
    name: '',
    email: '',
    address: {
        street: '',
        postalCode: ''
    }
}

const ContactData = props => {
    const [data, setData] = useState(initState);
    const [loading, setLoading] = useState(false);

    const orderHandler = (e) => {
        e.preventDefault();
        console.log(props.ingredients);
        setLoading(true);

        const order = {
            ingredients: props.ingredients,
            totalPrice: props.price,
        }
        axios.post('/oders.json', order)
            .then(res => {
                setLoading(false);
                props.history.push('/')
            })
            .catch(error => setLoading(false));

    }

    return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {
                loading
                    ?
                    (<Spinner />)
                    :
                    (<form>
                        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                        <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                        <input className={classes.Input} type="text" name="street" placeholder="Street" />
                        <input className={classes.Input} type="text" name="postalCode" placeholder="PostalCode" />
                        <Button btnType="Success" clicked={orderHandler}>ORDER</Button></form>)
            }
        </div>
    )
}


export default ContactData
