import React, {useState} from "react";
import Footer from './components/Footer.js'
import {BsJustify, BsListUl} from 'react-icons/bs'
import {Col, Row, Container} from 'react-bootstrap'
import {AiFillFacebook, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FaStackOverflow} from 'react-icons/fa'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import SignInScreen from "./components/screens/SignInScreen";
import RigesterScreen from "./components/screens/RigesterScreen";
import NewProduct from "./components/screens/NewProduct";
import ShippingScreen from "./components/screens/shippingScreen";
import PaymentScreen from "./components/screens/PaymentScreen";
import PlaceOrder from "./components/screens/PlaceOrder";
import ProductScreen from "./components/screens/ProductScreen.js";
import CartScreen from "./components/screens/CartScreen";
import {useSelector, useDispatch} from "react-redux";
import {signout} from "./redux/actions/userAction";
import Products from './components/screens/Products'
import LeftNav from './components/LeftNav'
import './css/main.css'
import Liked from './components/screens/Liked'
import {AnimatePresence} from "framer-motion";
import CommingSoon from './components/screens/CommingSoon'
import HomeScreen from "./components/screens/HomeScreen";
import Header from "./components/Header.js";


const App = () => (
    <Router>
        <div className='app'>
            <Header/>
            <section className='body' id="body">
                {/*<LeftNav />*/}
                <Switch>
                    <Route path='/' component={HomeScreen} exact={true}/>
                    <Route path="/online" component={Products} exact={true}/>
                    <Route path="/products/:id" component={ProductScreen} exact={true}/>
                    <Route path="/online/:id" component={CommingSoon} exact={true}/>
                    <Route path="/signin" component={SignInScreen} exact={true}/>
                    <Route path="/rigester" component={RigesterScreen} exact={true}/>
                    <Route path="/products" component={NewProduct} exact={true}/>
                    <Route path="/shipping" component={ShippingScreen} exact={true}/>
                    <Route path="/payment" component={PaymentScreen} exact={true}/>
                    <Route path="/placeorder" component={PlaceOrder} exact={true}/>
                    <Route path="/cart/:id?" component={CartScreen}/>
                    <Route path="/liked" component={Liked} exact={true}/>
                </Switch>


            </section>
            <Footer/>
        </div>
    </Router>
);
export default App;
