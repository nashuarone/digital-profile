import { skillsAPI } from "../api/api";

const SET_HARD_SKILLS = "SET_HARD_SKILLS";
const SET_SOFT_SKILLS = "SET_SOFT_SKILLS";

let initialState = {
  hardSkillsData: {},
  softSkillsData: {},
};

const skillReducer = (state_a = initialState, action) => {
  switch (action.type) {
    case SET_HARD_SKILLS:
      return {
        ...state_a,
        hardSkillsData: action.data,
      };
    case SET_SOFT_SKILLS:
      return {
        ...state_a,
        softSkillsData: action.data,
      };
    default:
      return state_a;
  }
};

export const setHardSkill = (data) => ({ type: SET_HARD_SKILLS, data });
export const setSoftSkill = (data) => ({ type: SET_SOFT_SKILLS, data });

export const getHardSkills = (userId) => (dispatch) => {
  skillsAPI.hard(userId).then((res) => {
    //dispatch(setSuccessMessage("Сообщение отправлено"));
    dispatch(setHardSkill(res.data));
    console.log("HardSkills", res.data);
    //dispatch(setSuccessMessage(""));
  });
};
export const getSoftSkills = (userId) => (dispatch) => {
  skillsAPI.soft(userId).then((res) => {
    //dispatch(setSuccessMessage("Сообщение отправлено"));
    dispatch(setSoftSkill(res.data));
    console.log("SoftSkills", res.data);
    //dispatch(setSuccessMessage(""));
  });
};

export default skillReducer;
