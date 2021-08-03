import { resumeAPI } from "../api/api";

const CLEAR = "RESUME/CLEAR";
const SET_RESUME = "SET_RESUME";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE";
const TOGGLE_IS_LOGIN_BUTTON = "TOGGLE_IS_LOGIN_BUTTON";
const SET_REDIRECT_CONDITION = "SET_REDIRECT_CONDITION";

let isCheck = false

let initialState = {
  resumeData: {},
  isLoaded: false,
  isFetchingButton: false,
  isReadyForRedirect: false,
  error_message: "",
  success_message: "",
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESUME: {
      return {
        ...state,
        resumeData: action.payload,
        isLoaded: true,
      };
    }
    case CLEAR: {
      return {
        ...state,
        resumeData: {},
        isLoaded: false,
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
    case SET_REDIRECT_CONDITION:
      return {
        ...state,
        isReadyForRedirect: action.redirectStatus,
      };
    default:
      return state;
  }
};

const checkChanger = () => {
  isCheck = true;
  return
}
const checkChangerBack = () => {
  isCheck = false;
  return;
};

export const setResume = (data) => ({
  type: SET_RESUME,
  payload: data,
});
export const clearResume = () => ({
  type: CLEAR,
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
export const setRedirectCondition = (redirectStatus) => ({
  type: SET_REDIRECT_CONDITION,
  redirectStatus,
});

export const createResume = (
    resumeId,
    firstName,
    secondName,
    thirdName,
    tel,
    email,
    telegramIdentifier,
    discordIdentifier,
    fbLink,
    vkLink,
    placeOfResidence,
    birthDate,
    sex,
    militaryTicker,
    citizenship,
    desiredEmployment,
    desiredWorkSchedule,
    workExperiences,
    projectActivities,
    additionalInformation,
    availableLanguages,
    aboutMe,
    secondaryGeneralEducations,
    otherEducation,
    certificates
  ) => (dispatch) => {
    dispatch(toggleIsLoginButton(true));
    isCheck
      ? resumeAPI
          .edit(
            resumeId,
            firstName,
            secondName,
            thirdName,
            tel,
            email,
            telegramIdentifier,
            discordIdentifier,
            fbLink,
            vkLink,
            placeOfResidence,
            birthDate,
            sex,
            militaryTicker,
            citizenship,
            desiredEmployment,
            desiredWorkSchedule,
            workExperiences,
            projectActivities,
            additionalInformation,
            availableLanguages,
            aboutMe,
            secondaryGeneralEducations,
            otherEducation,
            certificates
          )
          .then((res) => {
            if (res.status === 500) {
              dispatch(setErrMessage("500. Что-то пошло не так"));
              dispatch(toggleIsLoginButton(false));
              checkChangerBack();
            }
            if (res.status === 400 || res.status === 404) {
              dispatch(setErrMessage("400. Что-то пошло не так"));
              dispatch(toggleIsLoginButton(false));
              checkChangerBack();
            }
            if (res.status === 200) {
              dispatch(setSuccessMessage("Резюме сохранено"));
              dispatch(toggleIsLoginButton(false));
              dispatch(setResume(res.data));
              console.log(res.data);
              dispatch(setSuccessMessage(""));
              dispatch(setRedirectCondition(true));
            }
          })
          .catch((err) => {
            dispatch(toggleIsLoginButton(false));
            console.log(err);
          })
      : resumeAPI
          .create(
            firstName,
            secondName,
            thirdName,
            tel,
            email,
            telegramIdentifier,
            discordIdentifier,
            fbLink,
            vkLink,
            placeOfResidence,
            birthDate,
            sex,
            militaryTicker,
            citizenship,
            desiredEmployment,
            desiredWorkSchedule,
            workExperiences,
            projectActivities,
            additionalInformation,
            availableLanguages,
            aboutMe,
            secondaryGeneralEducations,
            otherEducation,
            certificates
          )
          .then((res) => {
            dispatch(setSuccessMessage("Резюме сохранено"));
            dispatch(toggleIsLoginButton(false));
            dispatch(setResume(res.data));
            console.log(res.data);
            dispatch(setSuccessMessage(""));
            dispatch(setRedirectCondition(true));
          })
          .catch((err) => {
            dispatch(toggleIsLoginButton(false));
            console.log(err);
            checkChangerBack();
          });
  };
  export const getResume = (resumeLink) => (dispatch) => {
    dispatch(toggleIsLoginButton(true));
    resumeAPI
      .get(resumeLink)
      .then((res) => {
        if (res.status === 200) {
          checkChanger()
        }
        if (res.status === 404) {
          checkChangerBack();
        }
        dispatch(setSuccessMessage("Резюме подгружено"));
        dispatch(toggleIsLoginButton(false));
        dispatch(setResume(res.data))
        console.log(res.data);
        dispatch(setSuccessMessage(""));
        dispatch(setRedirectCondition(false));
      })
      .catch((err) => {
        dispatch(toggleIsLoginButton(false));
        console.log(err);
        checkChangerBack();
      });
  };

export default resumeReducer;
