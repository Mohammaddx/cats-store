import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";

export const createAddToCartAction = (productInfo, quantity) => {
  return {
    type: ADD_TO_CART,
    productInfo,
    quantity,
  };
};

const createRemoveFromCartAction = (index) => {
  return { type: REMOVE_FROM_CART, index };
};

export const createClearCartAction = () => {
  return { type: CLEAR_CART };
};

// Dispatch section

export const addToCart = (productInfo, quantity) => {
  return (dispatch) => {
    dispatch(createAddToCartAction(productInfo, quantity));
  };
};

export const removeFromCart = (index) => {
  return (dispatch) => {
    dispatch(createRemoveFromCartAction(index));
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch(createClearCartAction());
  };
};
