import {
  authAPI
} from "../api/api";

const LOGOUT = "LOGOUT";
const SET_USER = "SET_USER";
const TOGGLE_IS_LOGIN_BUTTON = "TOGGLE_IS_LOGIN_BUTTON";

let initialState = {
  userData: {},
  isAuth: false,
  isFetchingButton: false,
};

const authReducer = (state_p = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state_p,
        userData: action.payload,
        isAuth: true,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state_p,
        userData: {},
        isAuth: false,
      };
    }
    case TOGGLE_IS_LOGIN_BUTTON:
      return {
        ...state_p,
        isFetchingButton: action.fetchingStatus,
      };
    default:
      return state_p;
  }
};

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
export const logout = () => ({
  type: LOGOUT,
});
export const toggleIsLoginButton = (fetchingStatus) => ({
  type: TOGGLE_IS_LOGIN_BUTTON,
  fetchingStatus,
});

export const createUser =
  (firstName, secondName, thirdName, email, tel, password, birthDate) =>
  (dispatch) => {
    dispatch(toggleIsLoginButton(true));
    authAPI
      .signup(firstName, secondName, thirdName, email, tel, password, birthDate)
      .then((data) => {
        dispatch(toggleIsLoginButton(false));
        console.log(data);
      })
      .catch((err) => {
        dispatch(toggleIsLoginButton(false));
        console.log(err);
      });
  };
export const getUserData = (email, password) => (dispatch) => {
  dispatch(toggleIsLoginButton(true));
  authAPI.login(email, password).then((data) => {
    dispatch(toggleIsLoginButton(false));
    localStorage.setItem("token", data.token);
    dispatch(auth());
    console.log(data);
  });
};
export const auth = () => (dispatch) => {
  dispatch(toggleIsLoginButton(true));
  return authAPI.auth().then((data) => {
    dispatch(toggleIsLoginButton(false));
    if (data === 401) {
      dispatch(logout());
    } else {
      dispatch(setUser(data));
    }
  });
};


export default authReducer;
