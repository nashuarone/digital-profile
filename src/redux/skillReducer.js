import { skillsAPI } from "../api/api";

const SET_HARD_SKILLS = "SET_HARD_SKILLS";

let initialState = {
  hardSkillsData: {},
};

const skillReducer = (state_a = initialState, action) => {
  switch (action.type) {
    case SET_HARD_SKILLS:
      return {
        ...state_a,
        hardSkillsData: action.data,
      };
    default:
      return state_a;
  }
};

export const setHardSkill = (data) => ({ type: SET_HARD_SKILLS, data });

export const getHardSkills = (userId) => (dispatch) => {
  skillsAPI.hard(userId).then((res) => {
    //dispatch(setSuccessMessage("Сообщение отправлено"));
    dispatch(setHardSkill(res.data));
    console.log("HardSkills", res.data);
    //dispatch(setSuccessMessage(""));
  });
};

export default skillReducer;
