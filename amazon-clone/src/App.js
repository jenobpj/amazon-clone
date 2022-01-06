import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import { auth } from "./Components/firebase";
import { useStateValue } from "./Components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51JuQa3F6hhx3MSQzoQhTomHo9PiuQhtIbJenvOa7TFpbWvRjJmfo73awt2CzcHIBgTnv3nZSi7ZCo83KoQKMGzJy00CA7z0o7E"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);
      if (authUser) {
        //the user just logged in/the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      {/* <Header /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
