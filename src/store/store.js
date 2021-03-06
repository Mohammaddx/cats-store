import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/";

const initialState = {
  cart: [
    {
      product: {
        id: 1,
        name: "White Cat",
        price: 100,
        image: "/images/1.jpg",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      quantity: 6,
    },
  ],
};

const store = createStore(
  cartReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
