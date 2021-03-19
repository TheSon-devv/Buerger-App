import React, { useState, useEffect } from 'react'
import Order from '../../components/Oder/Order'
import axios from '../../axios-orders'
import { useSelector } from 'react-redux';


const Orders = props => {
    const [orders, setOrders] = useState([]);

    const token = useSelector(state => state.auth.token)
    useEffect(() => {
        axios.get('/oders.json?auth=1' )
            .then(res => {
                const fetchedOrder = [];
                for (let key in res.data) {
                    fetchedOrder.push({
                        ...res.data[key],
                        id: key
                    })
                }
                setOrders(fetchedOrder)
                // console.log(fetchedOrder)
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
                        orderForm={order.orderForm}   
                        price={order.totalPrice}                    
                    />
                )
            })}
        </div>
    )
}



export default Orders
