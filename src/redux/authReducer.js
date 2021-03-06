import {
  authAPI
} from "../api/api";
import { clearResume } from "./resumeReducer";
import { clearStorage } from "./storageReducer";

const LOGOUT = "LOGOUT";
const SET_USER = "SET_USER";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE";
const TOGGLE_IS_LOGIN_BUTTON = "TOGGLE_IS_LOGIN_BUTTON";

let initialState = {
  userData: {},
  isAuth: false,
  isFetchingButton: false,
  error_message: '',
  success_message: ''
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
        error_message: "",
        success_message: ""
      };
    }
    case SET_ERROR_MESSAGE: {
      return {
        ...state_p,
        error_message: action.err_mes,
      };
    }
    case SET_SUCCESS_MESSAGE: {
      return {
        ...state_p,
        success_message: action.success_message,
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
export const setErrMessage = (err_mes) => ({
  type: SET_ERROR_MESSAGE,
  err_mes,
});
export const setSuccessMessage = (success_message) => ({
  type: SET_SUCCESS_MESSAGE,
  success_message,
});
export const toggleIsLoginButton = (fetchingStatus) => ({
  type: TOGGLE_IS_LOGIN_BUTTON,
  fetchingStatus,
});

export const generalLogout = () => (dispatch) => {
  dispatch(logout());
  dispatch(clearStorage());
  dispatch(clearResume());
}
export const createUser =
  (firstName, secondName, thirdName, email, tel, password, birthDate) =>
  (dispatch) => {
    dispatch(toggleIsLoginButton(true));
    authAPI
      .signup(firstName, secondName, thirdName, email, tel, password, birthDate)
      .then((res) => {
        if (res.status === 422) {
          dispatch(setErrMessage("422. ?????????????????? ???????? ???????????? ?????? ????????????????????????"));
          dispatch(toggleIsLoginButton(false));
          console.log(res);
          dispatch(setErrMessage(""));
        }
        if (res.status === 400) {
          dispatch(setErrMessage("400. ???????????? ?? ???????????????????????? ????????????"));
          dispatch(toggleIsLoginButton(false));
          console.log(res);
          dispatch(setErrMessage(""));
        }
        if (res.status === 201 || res.status === 200) {
          dispatch(setSuccessMessage("?????????????????????? ????????????????, ?????????????? ?? ???????????? ??????????????"));
          dispatch(toggleIsLoginButton(false));
          console.log(res);
          dispatch(setSuccessMessage(""));
        }
      })
      .catch((err) => {
        dispatch(toggleIsLoginButton(false));
        console.log(err);
      });
  };
export const getUserData = (email, password) => (dispatch) => {
  dispatch(toggleIsLoginButton(true));
  authAPI.login(email, password).then((res) => {
    dispatch(toggleIsLoginButton(false));
    if (res.status === 401) {
      dispatch(setErrMessage("401. ???????????????? ?????????? ?????? ????????????"));
      dispatch(logout());
      dispatch(clearStorage());
      dispatch(clearResume());
    }
    if (res.status === 200) {
      dispatch(setSuccessMessage("??????????????. ?????????? ??????????????"));
      localStorage.setItem("token", res.data.token);
      dispatch(auth());
      //dispatch(refresh(res.data.refresh_token));
      console.log(res.data);
    }
  });
};
export const auth = () => (dispatch) => {
  dispatch(toggleIsLoginButton(true));
  return authAPI.me().then((res) => {
    dispatch(toggleIsLoginButton(false));
    if (res.status === 401) {
      dispatch(setErrMessage("401..."));
      dispatch(logout());
      dispatch(clearStorage());
      dispatch(clearResume());
    }
    if (res.status === 404) {
      dispatch(setErrMessage("404. ???????????????????????? ???? ????????????..."));
      dispatch(logout());
      dispatch(clearStorage());
      dispatch(clearResume());
    }
    if (res.status === 200) {
      dispatch(setSuccessMessage("???????? ????????????????"));
      dispatch(setUser(res.data));
      dispatch(setSuccessMessage(""));
      console.log(res.data);
    }
  });
};
// export const refresh = (refresh_token) => (dispatch) => {
//   return authAPI.refresh(refresh_token).then((res) => {
//     localStorage.setItem("token", res.data.token);
//     dispatch(setSuccessMessage("?????????? ????????????????"));
//   });
// };
export const putUserData =
  (userId, firstName, secondName, thirdName, email, tel, birthDate, photo) =>
  (dispatch) => {
    dispatch(toggleIsLoginButton(true));
    authAPI
      .put(userId, firstName, secondName, thirdName, email, tel, birthDate, photo)
      .then((res) => {
        dispatch(toggleIsLoginButton(false));
        if (res.status === 404) {
          dispatch(setErrMessage("404. ???????????????????????? ???? ????????????"));
        }
        if (res.status === 200) {
          dispatch(setSuccessMessage("???????????? ??????????????????"));
          dispatch(setUser(res.data));
          console.log("put with photo", res.data);
          dispatch(setSuccessMessage(""));
        }
      });
  };

export default authReducer;
