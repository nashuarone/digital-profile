import { storageAPI } from "../api/api";

const SET_AVATAR = "SET_AVATAR";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE";

let initialState = {
  fileLink: "",
  almazId: "",
  error_message: "",
  success_message: "",
};

const storageReducer = (state_a = initialState, action) => {
  switch (action.type) {
    case SET_AVATAR:
      debugger
      return {
        ...state_a,
        fileLink: action.payload.fileLink,
        almazId: action.payload["@id"],
      };
    case SET_ERROR_MESSAGE: {
      return {
        ...state_a,
        error_message: action.err_mes,
      };
    }
    case SET_SUCCESS_MESSAGE: {
      return {
        ...state_a,
        success_message: action.success_message,
      };
    }
    default:
      return state_a;
  }
};

export const setAvatarData = (payload) => ({ type: SET_AVATAR, payload });
export const setErrMessage = (err_mes) => ({
  type: SET_ERROR_MESSAGE,
  err_mes,
});
export const setSuccessMessage = (success_message) => ({
  type: SET_SUCCESS_MESSAGE,
  success_message,
});

export const saveAvatar = (fileName, fileExtension, fileEncoded) => (dispatch) => {
  storageAPI.avatar(fileName, fileExtension, fileEncoded).then((res) => {
    dispatch(setSuccessMessage("Файл сохранен на сервере"));
    dispatch(setAvatarData(res.data));
    //dispatch(refresh(res.data.refresh_token));
    console.log(res);
    dispatch(setSuccessMessage(""));
  });
};

export default storageReducer;
