import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SignInScreen from "../components/screens/SignInScreen";
import RigesterScreen from "../components/screens/RigesterScreen";
import NewProduct from "../components/screens/NewProduct";
import ShippingScreen from "../components/screens/shippingScreen";
import PaymentScreen from "../components/screens/PaymentScreen";
import PlaceOrder from "../components/screens/PlaceOrder";
import HomeScreen from "../components/screens/HomeScreen.js";
import ProductScreen from "../components/screens/ProductScreen.js";
import CartScreen from "../components/screens/CartScreen";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../redux/actions/userAction";
import Products from '../components/screens/Products'
import LeftNav from '../components/LeftNav'
function Main() {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.currentUser);
  const { isAuhenticated, user } = currentUser;
  const { cartItems } = cart;

  return (
    <Router className='router'>
      <LeftNav />
      {/* <Header
        cartItems={cartItems}
        signout={signout}
        isAuhenticated={isAuhenticated}
        user={user}
      /> */}
      <Route path='/' component={HomeScreen} exact={true} />
      <Route path="/allproducts" component={Products} exact={true} />
      <Route path="/signin" component={SignInScreen} exact={true} />
      <Route path="/rigester" component={RigesterScreen} exact={true} />
      <Route path="/products" component={NewProduct} exact={true} />
      <Route path="/shipping" component={ShippingScreen} exact={true} />
      <Route path="/payment" component={PaymentScreen} exact={true} />
      <Route path="/placeorder" component={PlaceOrder} exact={true} />
      <Route path="/products/:id" component={ProductScreen} exact={true} />
      <Route path="/cart/:id?" component={CartScreen} />
    </Router>
  );
}

export default Main;
