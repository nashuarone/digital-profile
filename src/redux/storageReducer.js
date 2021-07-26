import { storageAPI } from "../api/api";

const SET_AVATAR = "SET_AVATAR";
const SET_CERTIFICATE = "SET_CERTIFICATE";
const SET_PROFILE_PHOTO = "SET_PROFILE_PHOTO";
const CLEAR = "CLEAR";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE";

let initialState = {
  profilePhotoFileLink: "",
  profilePhotoUuid: "",
  fileLink: "",
  fileLinkCertificate: "",
  almazId: "",
  almazIdCertificate: "",
  uuid: "",
  uuidCertificate: "",
  fileName: "",
  fileNameCertificate: "",
  fileExtension: "",
  fileExtensionCertificate: "",
  error_message: "",
  success_message: "",
};

const storageReducer = (state_a = initialState, action) => {
  switch (action.type) {
    case SET_AVATAR:
    return {
      ...state_a,
      fileLink: action.payload.fileLink,
      almazId: action.payload["@id"],
      uuid: action.payload.uuid,
      fileName: action.payload.fileName,
      fileExtension: action.payload.fileExtension,
    };
    case SET_CERTIFICATE:
    return {
      ...state_a,
      fileLinkCertificate: action.payload.fileLink,
      almazIdCertificate: action.payload["@id"],
      uuidCertificate: action.payload.uuid,
      fileNameCertificate: action.payload.fileName,
      fileExtensionCertificate: action.payload.fileExtension,
    };
    case SET_PROFILE_PHOTO:
    return {
      ...state_a,
      profilePhotoFileLink: action.payload.fileLink,
      profilePhotoUuid: action.payload.uuid,
    };
    case CLEAR:
      return {
        ...state_a,
        profilePhotoFileLink: "",
        profilePhotoUuid: "",
        fileLink: "",
        fileLinkCertificate: "",
        almazId: "",
        almazIdCertificate: "",
        uuid: "",
        uuidCertificate: "",
        fileName: "",
        fileNameCertificate: "",
        fileExtension: "",
        fileExtensionCertificate: "",
        error_message: "",
        success_message: "",
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
export const setCertificateData = (payload) => ({ type: SET_CERTIFICATE, payload });
export const setProfilePhoto = (payload) => ({ type: SET_PROFILE_PHOTO, payload });
export const clearStorage = () => ({ type: CLEAR });
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
    console.log("Save avatar", res.data);
    dispatch(setSuccessMessage(""));
  });
};
export const saveCertificate = (fileName, fileExtension, fileEncoded) => (dispatch) => {
  storageAPI.avatar(fileName, fileExtension, fileEncoded).then((res) => {
    dispatch(setSuccessMessage("Сертификат сохранен на сервере"));
    dispatch(setCertificateData(res.data));
    console.log("Save certificate", res.data);
    dispatch(setSuccessMessage(""));
  });
};
export const getProfilePhoto = (photoLink) => (dispatch) => {
  storageAPI.photo(photoLink).then((res) => {
    dispatch(setSuccessMessage("Фото профиля загружено"));
    dispatch(setProfilePhoto(res.data));
    console.log("Almaz additional req/res", res.data);
    dispatch(setSuccessMessage(""));
  });
};

export default storageReducer;
