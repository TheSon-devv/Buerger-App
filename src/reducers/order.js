import {PURCHASE_INIT,PURCHASE_BURGER_START,PURCHASE_BURGER_SUCCES,PURCHASE_BURGER_FAIL} from "../actions/order";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
      };
    case PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true,
      };
    case PURCHASE_BURGER_SUCCES:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder),
      };
    case PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;