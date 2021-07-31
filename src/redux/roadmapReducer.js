import { roadmapAPI } from "../api/api";

const SET_PROGRESS = "SET_PROGRESS";

let initialState = {
  roadmapData: [],
};

const roadmapReducer = (state_a = initialState, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state_a,
        roadmapData: Object.values(action.progress).filter((v) => (v ? v : null)),
      };
    default:
      return state_a;
  }
};

export const setProgress = (progress) => ({ type: SET_PROGRESS, progress });

export const getProgress = () => (dispatch) => {
  roadmapAPI.progress().then((res) => {
    //dispatch(setSuccessMessage("Сообщение отправлено"));
    dispatch(setProgress(res.data));
    console.log("Roadmap progress data", res.data);
    //dispatch(setSuccessMessage(""));
  });
};

export default roadmapReducer;
