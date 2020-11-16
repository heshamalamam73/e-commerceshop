import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_RIGESTER_REQUEST,
  USER_RIGESTER_SUCCESS,
  USER_RIGESTER_FAIL,
  USER_LOGOUT_SUCCESS,
  SET_CURRENT_USER,
} from "../actionType/userActionType";
import Cookie from "js-cookie";
import axios from "axios";
import setTokenHeader from "../helpers/setAuth";

export const currentuser = (user) => async (dispatch) => {
  dispatch({ type: SET_CURRENT_USER, payload: user });
};
export function setAutorizationToken(token) {
  setTokenHeader(token);
}

const Rigester = (email, password, username) => async (dispatch) => {
  dispatch({
    type: USER_RIGESTER_REQUEST,
    payload: { email, password, username },
  });
  try {
    const { data } = await axios.post("api/users/register", {
      email,
      password,
      username,
    });
    if (data.success) {
      const user = {
        username: data.username,
        email: data.email,
        token: data.token,
        image: data.image,
      };
      console.log(user);
      dispatch({ type: USER_RIGESTER_SUCCESS, payload: user });
      localStorage.setItem("jwtToken", user.token);
      setTokenHeader(user.token);
      dispatch(currentuser(user));
    }
    dispatch({ type: USER_RIGESTER_FAIL, payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_RIGESTER_FAIL, payload: error });
  }
};
const signin = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
  try {
    const { data } = await axios.post("api/users/login", {
      username,
      password,
    });
    console.log(data);
    if (data.success) {
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      const user = {
        username: data.username,
        email: data.email,
        token: data.token,
        image: data.image,
      };
      localStorage.setItem("jwtToken", user.token);
      setTokenHeader(user.token);
      dispatch(currentuser(user));
    } else {
      dispatch({ type: USER_SIGNIN_FAIL, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error });
  }
};
const signout = () => async (dispatch) => {
  localStorage.clear();
  setTokenHeader(false);
  dispatch(currentuser({}));
};

export { signin, Rigester, signout };
