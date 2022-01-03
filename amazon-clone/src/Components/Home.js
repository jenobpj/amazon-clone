import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61pMwykTQYL._SX3000_.jpg"
        />
        <div className="home__row">
          <Product
            title="The lean start up"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}
export default Home;
