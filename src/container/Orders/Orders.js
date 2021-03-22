import React, { useEffect } from 'react'
import Order from '../../components/Oder/Order'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from "../../actions/order";
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = props => {

    const orders = useSelector(state => state.order.orders)
    const loading = useSelector(state => state.order.loading)
    const token = useSelector(state => state.auth.token)
    const userId = useSelector(state => state.auth.userId)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchOrder(token,userId))
    }, [])


    return (
        <div>
            {loading ? <Spinner /> : orders.map(order => {
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
