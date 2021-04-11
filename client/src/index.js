import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { setAutorizationToken, currentuser } from "./redux/actions/userAction";
import jwtDecode from "jwt-decode";
import axios from "axios";

// axios.interceptors.request.use((req) => {
//   console.log(req);
// });

if (localStorage.jwtToken) {
  setAutorizationToken(localStorage.jwtToken);
  try {
    store.dispatch(currentuser(jwtDecode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(currentuser({}));
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
