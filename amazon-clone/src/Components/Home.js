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
            id="4334344"
            title="The lean start up"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="4343545"
            title="Logitech G733 K/DA Lightspeed Wireless Gaming Headset with Suspension Headband~16.8 M. Color"
            price="199.9"
            image="https://m.media-amazon.com/images/I/71nHaiwCHmL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samung LC49RG90SSUXEN 49 curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71TVaZublLL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="amazon Echo (3rd generation) | Smart speaker with Alexa,charcol fabric"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71at+SHImkL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple ipad Pro (12.9-inch, Wi-Fi,128GB) -Silver (4th Generation)"
            price={589.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61doEryji2S._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="534545"
            title="Samsung LC49RG90SSUXEN 49 CURVED LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_UL640_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
