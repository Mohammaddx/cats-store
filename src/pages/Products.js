import React, { useEffect, useState } from "react";
import ProductsItem from "../components/productsItem";
import ProductsAPI from "../api/products";

const Products = () => {
  const [product, setProdusct] = useState([]);

  useEffect(() => {
    ProductsAPI.getAll().then((data) => setProdusct(data));
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <h1>Products</h1>
      <div className="row">
        {product.map((el) => (
          <div className={"col-3"} key={el.id}>
            <ProductsItem product={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
