import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rigester } from "../../redux/actions/userAction";
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap";
import { Alert } from "reactstrap";
import ChickOutSteps from "../ChickOutSteps";

function RigesterScreen(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const userRigester = useSelector((state) => state.userRigester);
  const { loading, error, message, userInfo } = userRigester;
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    if (message === "logged in successfully") {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [message]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Rigester(email, password, username));
  };

  return (
    <Container className="sign">
      {/* <ChickOutSteps step1></ChickOutSteps> */}
      <Row className="signBox">
        <Col xs={12}  xl={4}>
      <Form onSubmit={submitHandler} className="form">
        <h2>Sign Up</h2>
        <hr />
        {loading && <Alert color="info">Loading....</Alert>}
        {message && <Alert color="info">{message}</Alert>}
        <Form.Group >
          <Form.Label >
            Email
          </Form.Label>

          <Form.Control
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

        </Form.Group>
        <Form.Group >
          <Form.Label >
            User Name
          </Form.Label>
          <Form.Control
            placeholder="Your Name"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group >
          <Form.Label >
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Group >
          <Form.Label >
            RePassword
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="repassword"
            onChange={(e) => setRepassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              style={{ margin: "10px" }}
              type="submit"
              onClick={submitHandler}
            >
              Rigester
            </Button>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Link
              to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}
              className="button full-width"
            >
              Log in ?
            </Link>
          </Col>
        </Form.Group>
      </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default RigesterScreen;
