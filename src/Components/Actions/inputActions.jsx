import { SET_TITLE, SET_DESCRIPTION, SET_DEADLINE } from "../Constants/inputConstants";

export const setTitle = (payload) => {
  return {
    type: SET_TITLE,
    payload
  };
};

export const setDesc = (payload) => {
  return {
    type: SET_DESCRIPTION,
    payload
  };
};

export const setDeadline = (payload) => {
  return {
    type: SET_DEADLINE,
    payload
  };
};
