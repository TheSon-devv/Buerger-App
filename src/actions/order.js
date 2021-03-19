
import axios from "../axios-orders";
import * as actions from "./actionType";

export const purchaseBurgerSucces = (orderData) => {
  return {
    type: actions.PURCHASE_BURGER_SUCCES,
    orderData: orderData,
  };
};
export const purchaseBurgerFail = (error) => {
  return {
    type: actions.PURCHASE_BURGER_FAIL,
    error: error,
  };
};
export const purchaseBurgerStart = () => {
  return {
    type: actions.PURCHASE_BURGER_START,
  };
};
export const purchaseBurger = (orderData,token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    axios.post("/oders.json?auth=" + token, orderData)
      .then((response) => {
        dispatch(purchaseBurgerSucces(response.data, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
export const purchaseInit = () => {
  return {
    type: actions.PURCHASE_INIT,
  };
};


export const fetchOrderSuccess = (orders) => {
  return {
    type: actions.FETCH_ORDERS_SUCCESS,
    orders: orders
  }
}

export const fetchOrderFail = () => {
  return {
    type: actions.PURCHASE_BURGER_FAIL
  }
}

export const fetchOrderStart = () => {
  return {
    type: actions.PURCHASE_BURGER_START
  }
}

export const fetchOrder = (token) => {
  return dispatch => {
    dispatch(fetchOrderStart())
    axios.get('/oders.json?auth=' + token)
      .then(res => {
        const fetchedOrder = [];
        for (let key in res.data) {
          fetchedOrder.push({
            ...res.data[key],
            id: key
          })
        }
        dispatch(fetchOrderSuccess(fetchedOrder))
      })
      .catch(error => dispatch(fetchOrderFail()))
  }
}