import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userAction.js";
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap";
import { Alert } from "reactstrap";
import ChickOutSteps from "../components/ChickOutSteps";
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
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  };

  return (
    <Container className="sign-screen">
      <ChickOutSteps step1></ChickOutSteps>
      <Form onSubmit={submitHandler} className="form-screen">
        {loading && <Alert color="info">Loading....</Alert>}
        {message && <Alert color="danger">{message}</Alert>}
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            User Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="User Name "
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
              Sign in
            </Button>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Link
              to={
                redirect === "/" ? "rigester" : "rigester?redirect=" + redirect
              }
              className="button full-width"
            >
              Create New acconut
            </Link>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}
export default SignInScreen;
