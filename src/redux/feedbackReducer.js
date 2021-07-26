import { feedbackAPI } from "../api/api";

const SET_FEEDBACK = "SET_FEEDBACK";
const SET_SUCCESS_MESSAGE = "FEEDBACK/SET_SUCCESS_MESSAGE";

let initialState = {
  feedback: {},
  success_message: "",
};

const feedbackReducer = (state_a = initialState, action) => {
  switch (action.type) {
    case SET_FEEDBACK:
      return {
        ...state_a,
        feedback: action.data,
      };
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

export const setFeedback = (data) => ({ type: SET_FEEDBACK, data });
export const setSuccessMessage = (success_message) => ({
  type: SET_SUCCESS_MESSAGE,
  success_message,
});

export const sendFeedback = (name, tel, email, message) => (dispatch) => {
  feedbackAPI.report(name, tel, email, message).then((res) => {
    dispatch(setSuccessMessage("Сообщение отправлено"));
    dispatch(setFeedback(res.data));
    console.log("Feedback", res.data);
    dispatch(setSuccessMessage(""));
  });
};

export default feedbackReducer;
