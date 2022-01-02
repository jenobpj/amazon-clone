import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean StartUp</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>

      <img src="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL640_FMwebp_QL65_.jpg" />

      <button>Add to Basket</button>
    </div>
  );
}
export default Product;
