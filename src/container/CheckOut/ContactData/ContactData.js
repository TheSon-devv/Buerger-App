import React, { useState } from 'react'
import {  } from "../../../components/UI/Button/Button";

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
    return (
        <div>
            <h4>Enter your Contact Data</h4>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <input type="text" name="street" placeholder="Street" />
            <input type="text" name="postalCode" placeholder="PostalCode" />
        </div>
    )
}


export default ContactData
