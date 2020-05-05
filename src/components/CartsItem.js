import React from "react";
import { removeFromCart } from "../store/actions/actions";
import { connect } from "react-redux";

function CartsItem(props) {
  const { item, index } = props;
  const { product } = item;
  return (
    <div>
      <div className="card">
        <img
          src={product.image}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "200px", content: "" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            {product.price}$
            <br />
            Quantity: {item.quantity}
            <br />
            Total: {product.price * item.quantity}$
          </p>
          <button
            onClick={() => props.removeFromCart(index)}
            className="btn btn-danger"
          >
            <i className="fas fa-trash"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { removeFromCart })(CartsItem);
