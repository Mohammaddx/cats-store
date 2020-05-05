import React, { useEffect, useState } from "react";
import { getById } from "../api/products";
import { addToCart } from "../store/actions/actions";
import { connect } from "react-redux";

function Product(props) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantitiy, setQuantity] = useState(0);
  useEffect(() => {
    const id = props.match.params.id;
    getById(parseInt(id)).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, []);

  const handleQuanitiy = (evt) => {
    setQuantity(evt.target.value);
  };

  const addToCart = (product) => {
    props.addToCart(product, quantitiy);
  };

  if (loading) {
    return "Loading ...";
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <div className={"row"}>
        <div className="col-6">
          <img src={product.image} width={"100%"} height={"400px"} alt="" />
        </div>
        <div className="col-6">
          <h1>{product.name}</h1>
          <p>Price: {product.price}$</p>
          <p>{product.description}</p>
          <br />
          <br />
          <input
            type="number"
            value={quantitiy}
            onChange={handleQuanitiy}
            min="0"
          />
          <br />
          <br />
          <p>Total: {quantitiy * product.price}$</p>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addToCart })(Product);
