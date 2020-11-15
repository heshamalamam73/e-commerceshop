import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen";
import { useSelector, useDispatch } from "react-redux";
import SignInScreen from "./screens/SignInScreen";
import RigesterScreen from "./screens/RigesterScreen";
import NewProduct from "./screens/NewProduct";
import ShippingScreen from "./screens/shippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrder from "./screens/PlaceOrder";
import Header from "./components/Header";
import { signout } from "./actions/userAction";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.currentUser);
  const { isAuhenticated, user } = currentUser;
  const { cartItems } = cart;
  return (
    <Router>
      <div>
        <Header
          cartItems={cartItems}
          signout={signout}
          isAuhenticated={isAuhenticated}
          user={user}
        />

        <main className="main">
          <div className="content">
            <Route path="/" component={HomeScreen} exact={true} />
            <Route path="/signin" component={SignInScreen} exact={true} />
            <Route path="/rigester" component={RigesterScreen} exact={true} />
            <Route path="/products" component={NewProduct} exact={true} />
            <Route path="/shipping" component={ShippingScreen} exact={true} />
            <Route path="/payment" component={PaymentScreen} exact={true} />
            <Route path="/placeorder" component={PlaceOrder} exact={true} />
            <Route
              path="/products/:id"
              component={ProductScreen}
              exact={true}
            />

            <Route path="/cart/:id?" component={CartScreen} />
          </div>
        </main>
        <footer className="footer">all rights reserved2020</footer>
      </div>
    </Router>
  );
}

export default App;
