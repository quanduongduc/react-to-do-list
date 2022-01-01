import { SET_TITLE, SET_DESCRIPTION, SET_DEADLINE } from "../Constants/inputConstants";


export const initialState = {
    title: '',
    desc: '',
    deadline: '',
}

export function inputReducers(state, action) {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case SET_DESCRIPTION:
            return {
                ...state,
                desc: action.payload
            }
        case SET_DEADLINE:
            return {
                ...state,
                deadline: action.payload
            }
        default: console.log("invalid action");
    }
    return state;
}

