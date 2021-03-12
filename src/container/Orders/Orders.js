import React, { useState, useEffect } from 'react'
import Order from '../../components/Oder/Order'
import axios from '../../axios-orders'

const Orders = props => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('/oders.json')
            .then(res => {
                const fetchedOrder = [];
                for (let key in res.data) {
                    fetchedOrder.push({
                        ...res.data[key],
                        id: key
                    })
                }
                setOrders(fetchedOrder)
                console.log(fetchedOrder)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            {orders.map(order => {
                return (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.totalPrice}
                    />
                )
            })}
        </div>
    )
}



export default Orders
