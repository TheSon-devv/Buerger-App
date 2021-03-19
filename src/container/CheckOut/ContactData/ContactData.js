import React, { useState } from 'react'
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseBurger } from "../../../actions/order";

const initState = {
    name: '',
    email: '',
    street: '',
    postalCode: ''
}

const ContactData = props => {
    const [data, setData] = useState(initState);

    const loading = useSelector(state => state.order.loading)
    const token = useSelector(state => state.auth.token)

    const dispatch = useDispatch();

    const orderHandler = (e) => {
        e.preventDefault();

        const orderData = {
            ingredients: props.ingredients,
            totalPrice: props.price,
            orderForm: {
                name: data.name,
                email: data.email,
                street: data.street,
                postalCode: data.postalCode
            }
        }
        dispatch(purchaseBurger(orderData,token))
    }
    const handlerInputChange = (e) => {
        const { name, value } = e.target;
        const filedValue = { [name]: value };

        setData({
            ...data,
            ...filedValue
        })
        console.log(data)
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
                        <Input name="name" inputtype="input" value={data.name} onChange={handlerInputChange} type="text" placeholder="Your Name" />
                        <Input name="email" inputtype="input" value={data.email} onChange={handlerInputChange} type="email" placeholder="Your Email" />
                        <Input name="street" inputtype="input" value={data.street} onChange={handlerInputChange} type="text" placeholder="Street" />
                        <Input name="postalCode" inputtype="textarea" value={data.postalCode} onChange={handlerInputChange} type="text" placeholder="PostalCode" />
                        <Button btnType="Success" clicked={orderHandler}>ORDER</Button>
                    </form>)
            }
        </div>
    )
}


export default ContactData
