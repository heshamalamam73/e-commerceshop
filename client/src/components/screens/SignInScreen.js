import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/actions/userAction";
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap";
import { Alert } from "reactstrap";

import ChickOutSteps from "../ChickOutSteps";
import {motion} from "framer-motion";
function SignInScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, message } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo, props.history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  };

  return (

      <Container className='sign'>
        {/* <ChickOutSteps step1></ChickOutSteps> */}
        <Row className="signBox">
          <Col xs={12}  xl={4}>
            <Form onSubmit={submitHandler} className="form">
              <h2>Log In</h2>
              <hr />

              {loading && <Alert color="info">Loading....</Alert>}
              {message && <Alert color="danger">{message}</Alert>}
              <Form.Group controlId="formHorizontalName">
                <Form.Label >
                  User Name
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="User Name "
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
              </Form.Group>
              <Form.Group controlId="formHorizontalPassword">
                <Form.Label  >
                  Password
                </Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
              </Form.Group>

              <Button

                  type="submit"
                  onClick={submitHandler}
              >
                Log In            </Button>


              <Link
                  to={
                    redirect === "/" ? "rigester" : "rigester?redirect=" + redirect
                  }
              >
                Create New acconut
              </Link>

            </Form>

          </Col>
        </Row>


      </Container >

  );
}
export default SignInScreen;
