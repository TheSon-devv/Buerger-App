import * as actions from "../actions/actionType";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
      };
    case actions.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true,
      };
    case actions.PURCHASE_BURGER_SUCCES:
      const newOrder = {
        ...action.orderData
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder),
      };
    case actions.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      }
    case actions.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false
      }
    case actions.FETCH_ORDERS_FAIL:
      return {
        ...state,
        // loading: true
      }
    default:
      return state;
  }
};

export default reducer;