import React from "react";
import CartsItem from "../components/CartsItem";
import { clearCart } from "../store/actions/actions";
import { connect } from "react-redux";

const Carts = (props) => {
  const placeOrder = () => {
    props.clearCart();
    alert("Your cart is empty now bb!!!");
  };
  return (
    <div style={{ padding: "10px" }}>
      <h1>Carts</h1>
      <div className="row">
        {props.cartItem.map((item, index) => (
          <div className={"col-3"} key={item.product.id}>
            <CartsItem item={item} index={index} />
          </div>
        ))}
      </div>
      <br />
      <h3>Total: {props.total}</h3>
      <br />
      <button className="btn btn-primary btn-block" onClick={placeOrder}>
        place order
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    ),
  };
};

export default connect(mapStateToProps, { clearCart })(Carts);
