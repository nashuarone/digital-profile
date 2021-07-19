import { authAPI } from "../api/api";

const LOGOUT = "LOGOUT";
const SET_RESUME = "SET_RESUME";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE";
const TOGGLE_IS_LOGIN_BUTTON = "TOGGLE_IS_LOGIN_BUTTON";

let initialState = {
  resumeData: {},
  isFetchingButton: false,
  error_message: "",
  success_message: "",
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESUME: {
      return {
        ...state,
        resumeData: action.payload,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        userData: {},
        isAuth: false,
        error_message: "",
        success_message: "",
      };
    }
    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        error_message: action.err_mes,
      };
    }
    case SET_SUCCESS_MESSAGE: {
      return {
        ...state,
        success_message: action.success_message,
      };
    }
    case TOGGLE_IS_LOGIN_BUTTON:
      return {
        ...state,
        isFetchingButton: action.fetchingStatus,
      };
    default:
      return state;
  }
};

export const setResume = (data) => ({
  type: SET_RESUME,
  payload: data,
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

export const createResume =
  (firstName, secondName, thirdName, email, tel, password, birthDate) =>
  (dispatch) => {
    dispatch(toggleIsLoginButton(true));
    authAPI
      .signup(firstName, secondName, thirdName, email, tel, password, birthDate)
      .then((data) => {
        dispatch(
          setSuccessMessage("Регистрация пройдена, войдите в личный кабинет")
        );
        dispatch(toggleIsLoginButton(false));
        console.log(data);
        dispatch(setSuccessMessage(""));
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
      dispatch(setErrMessage("401. Неверный логин или пароль"));
      dispatch(logout());
    }
    if (res.status === 200) {
      dispatch(setSuccessMessage("Успешно. Токен получен"));
      localStorage.setItem("token", res.data.token);
      dispatch(auth());
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
    }
    if (res.status === 404) {
      dispatch(setErrMessage("404. Пользователь не найден..."));
      dispatch(logout());
    }
    if (res.status === 200) {
      dispatch(setSuccessMessage("Вход выполнен"));
      dispatch(setResume(res.data));
      dispatch(setSuccessMessage(""));
    }
  });
};
export const putUserData =
  (userId, firstName, secondName, thirdName, email, tel, birthDate) =>
  (dispatch) => {
    dispatch(toggleIsLoginButton(true));
    authAPI
      .put(userId, firstName, secondName, thirdName, email, tel, birthDate)
      .then((res) => {
        dispatch(toggleIsLoginButton(false));
        if (res.status === 404) {
          dispatch(setErrMessage("404. Пользователь не найден"));
        }
        if (res.status === 200) {
          dispatch(setSuccessMessage("Данные обновлены"));
          dispatch(setResume(res.data));
          console.log(res.data);
          dispatch(setSuccessMessage(""));
        }
      });
  };

export default resumeReducer;
