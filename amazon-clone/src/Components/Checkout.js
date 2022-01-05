import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://mk0adespressoj4m2p68.kinstacdn.com/wp-content/uploads/2020/05/image8-3.png"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <CheckoutProduct
            id="12123"
            title="just for test"
            image="https://m.media-amazon.com/images/I/61pMwykTQYL._SX3000_.jpg"
            price="23.45"
            rating={5}
          />
          <CheckoutProduct
            id="12123"
            title="just for test"
            image="https://m.media-amazon.com/images/I/61pMwykTQYL._SX3000_.jpg"
            price="23.45"
            rating={5}
          />
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
