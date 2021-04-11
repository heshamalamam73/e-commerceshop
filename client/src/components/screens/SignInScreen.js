import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/actions/userAction";
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap";
import { Alert } from "reactstrap";
import ChickOutSteps from "../ChickOutSteps";
import Cookies from "js-cookie";
import { listProducts } from "../../redux/actions/productActions.js";
import axios from "axios";
import setTokenHeader from "../../redux/helpers/setAuth";

function SignInScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, message } = userSignin;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const hasTokens = async (token, refresh) => {
    if (!refresh) return null;
    if (token === undefined) {
      // generate new accessToken
      console.log("generate new accessToken");
      token = await fetchRefreshCall(refresh);
      return token;
    }
    return token;
  };
  const fetchRefreshCall = (refresh) => {
    console.log("refresh " + refresh);
    console.log("refreshing token ");
    return new Promise((resolve, reject) => {
      const token = {
        refresh: refresh,
      };
      axios.post("api/users/refresh", token).then((res) => {
        console.log(res.data);
        if (res.data.success === false) {
          resolve(false);
        } else {
          const token = res.data.token;
          const refresh = res.data.refrechToken;
          Cookies.set("token", token);
          Cookies.set("refresh", refresh);
          console.log(token);
          resolve(token);
        }
      });
    });
  };
  const refreshData = async (e) => {
    let token = Cookies.get("token");
    let refresh = Cookies.get("refresh");
    token = await hasTokens(token, refresh);
    if (!token) {
      console.log("not have refresh Token ");
    } else {
      dispatch(listProducts());
      console.log(token);
      console.log("had anew refresh Token ! ");
    }
  };

  useEffect(() => {
    if (userInfo) {
      const token = userInfo.token;
      const refresh = userInfo.refrechToken;
      Cookies.set("token", token);
      Cookies.set("refresh", refresh);
      // localStorage.setItem("jwtToken", JSON.stringify(token));
      // localStorage.setItem("jwtRefreshToken", JSON.stringify(refresh));
    }
  }, [userInfo, props.history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  };

  // axios.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (err) => {
  //     return new Promise((resolve, reject) => {
  //       const originalReq = err.config;
  //       if (
  //         err.response.status === 401 &&
  //         err.config &&
  //         !err.config.__isRetryRequest
  //       ) {
  //         originalReq._retry = true;

  //         let res = fetch("api/users/refresh", {
  //           method: "POST",
  //           mode: "cors",
  //           cache: "no-cache",
  //           credentials: "same-origin",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Device: "device",
  //             Token: Cookies.get("token"),
  //           },
  //           redirect: "follow",
  //           referrer: "no-referrer",
  //           body: {
  //             token: Cookies.get("token"),
  //             refresh: Cookies.get("refresh"),
  //           }),
  //         })
  //           .then((res) => res.json())
  //           .then((res) => {
  //             console.log(res);
  //             this.setSession({ token: res.token, refresh_token: res.refresh });
  //             originalReq.headers["Token"] = res.token;
  //             originalReq.headers["Device"] = "device";

  //             return axios(originalReq);
  //           });

  //         resolve(res);
  //       }

  //       return Promise.reject(err);
  //     });
  //   }
  // );

  return (
    <Container className="sign">
      {/* <ChickOutSteps step1></ChickOutSteps> */}
      <Form onSubmit={submitHandler} className="signBox">
        <h2>Log In</h2>
        <hr />

        {loading && <Alert color="info">Loading....</Alert>}
        {message && <Alert color="danger">{message}</Alert>}
        <Form.Group controlId="formHorizontalName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name "
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Form.Group>
        <Form.Group controlId="formHorizontalPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button onClick={refreshData}>refresh Data </Button>

        <Button type="submit" onClick={submitHandler}>
          Log In{" "}
        </Button>

        <Link
          to={redirect === "/" ? "rigester" : "rigester?redirect=" + redirect}
        >
          Create New acconut
        </Link>
      </Form>
    </Container>
  );
}
export default SignInScreen;
