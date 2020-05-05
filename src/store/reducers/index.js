import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/types";

export default function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        cart: [
          ...state.cart,
          {
            product: action.productInfo,
            quantity: action.quantity,
          },
        ],
      };
    }
    case REMOVE_FROM_CART: {
      const item_index = action.index;
      const newState = { ...state };
      delete newState.cart[item_index];
      return newState;
    }

    case CLEAR_CART: {
      const newState = { ...state };
      newState.cart = [];
      return newState;
    }

    default:
      return state;
  }
}
