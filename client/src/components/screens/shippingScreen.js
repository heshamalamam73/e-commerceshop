import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "../../redux/actions/cartActions";
import ChickOutSteps from "../ChickOutSteps";
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap";
import { Alert } from "reactstrap";
import Cookie from "js-cookie";

function ShippingScreen(props) {
  const shipping = Cookie.getJSON("shipping");

  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  function setUserShippingData(){
    let ShippingData = {
      address,
      country,
      postalCode,
      city
    }
    localStorage.setItem("shippingData",JSON.stringify(ShippingData))
  }
  const savedShippingAdresses = localStorage.getItem("shippingData")
  const adresses  = JSON.parse((savedShippingAdresses))
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push("/payment");
    setUserShippingData()

  };
  const setcurrentAddress =(e)=>{
    e.preventDefault();
    dispatch(saveShipping({
      address : adresses.address,
      city: adresses.city,
      postalCode :adresses.postalCode,
      country:adresses.country
    }));
    props.history.push("/payment");

  }


  return (
    <Container className="shipping-screen">
      <ChickOutSteps step1 step2></ChickOutSteps>
      <Form onSubmit={submitHandler} className="form-screen">
        {savedShippingAdresses  && (
            <div>
              <p className='text-muted'> use this address ?</p>
              <button className='btn btn-primary' onClick={setcurrentAddress}>{adresses.address}</button>
            </div>
        )}
        <hr/>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={address}
              type="text"
              name="address"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Postal Code
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={postalCode}
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            City
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={city}
              placeholder="City"
              type="text"
              name="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Country
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={country}
              type="text"
              placeholder="Country"
              name="country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              style={{ margin: "10px" }}
              type="submit"
              onClick={submitHandler}
            >
              Continue
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}
export default ShippingScreen;
