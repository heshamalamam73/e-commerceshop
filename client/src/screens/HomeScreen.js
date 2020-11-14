import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions.js";
import { Spinner, Alert } from "reactstrap";
import ProductItem from "../screens/ProductItem";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import LeftNav from "../components/LeftNav.js";
import UpNav from "../components/UpNav";

function HomeScreen(props) {
  const productsList = useSelector((state) => state.productsList);

  const { products, loading, error } = productsList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, []);
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return loading ? (
    <div className="center">
      <Spinner style={{ width: "3rem", height: "3rem" }} />
    </div>
  ) : error ? (
    <div>Error...</div>
  ) : (
    <Container className="campgrounds">
      <Row>
        {products &&
          products.map((product) => (
            <ProductItem product={product} id={product._id} />
          ))}
      </Row>
    </Container>
  );
}
export default HomeScreen;
