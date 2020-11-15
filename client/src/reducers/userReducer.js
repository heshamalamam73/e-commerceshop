const {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_RIGESTER_SUCCESS,
  USER_RIGESTER_FAIL,
  USER_RIGESTER_REQUEST,
  USER_LOGOUT_SUCCESS,
  SET_CURRENT_USER,
} = require("../constants/userActionType");
const DEFAULT_STATE = {
  isAuhenticated: false,
  user: {},
};

function setCurrentUser(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuhenticated: !!Object.keys(action.payload).length,
        user: action.payload,
      };
    default:
      return state;
  }
}

function userRigesterReducer(state = {}, action) {
  switch (action.type) {
    case USER_RIGESTER_REQUEST:
      return { loading: true };
    case USER_RIGESTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        message: action.payload.message,
      };
    case USER_RIGESTER_FAIL:
      return { loading: false, message: action.payload };
    default:
      return state;
  }
}
function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        message: action.payload.message,
      };
    case USER_SIGNIN_FAIL:
      return {
        loading: false,
        message: action.payload,
        userInfo: null,
      };
    default:
      return state;
  }
}
function userSignoutReducer(state = {}, action) {
  switch (action.type) {
    case USER_LOGOUT_SUCCESS:
      return {
        message: action.payload,
        userInfo: {},
      };
    default:
      return state;
  }
}
export {
  userSigninReducer,
  userRigesterReducer,
  userSignoutReducer,
  setCurrentUser,
};
