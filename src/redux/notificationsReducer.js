import { notificationsAPI } from "../api/api";

const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";

let initialState = {
  notificationsData: [],
};

const appReducer = (state_a = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return {
        ...state_a,
        notificationsData: action.payload["hydra:member"],
      };
    default:
      return state_a;
  }
};

export const setNotifications = (payload) => ({ type: SET_NOTIFICATIONS, payload });

export const getNotifications = (userId) => (dispatch) => {
  notificationsAPI.all(userId).then((res) => {
    //dispatch(setSuccessMessage("Сообщение отправлено"));
    dispatch(setNotifications(res.data));
    console.log("Уведомления:", res.data);
    //dispatch(setSuccessMessage(""));
  });
};

export default appReducer;
