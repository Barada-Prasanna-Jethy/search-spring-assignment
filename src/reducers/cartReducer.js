import { CART_ACTIONS } from "../constants/actionTypes";

const initialState = {
  cartCount: 0,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    default:
      return state;
  }
}
