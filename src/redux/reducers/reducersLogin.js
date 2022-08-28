import { LOGIN, LOGOUT } from "../types/types";

const initialState = {}

export const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;

        case LOGOUT:
            return {}

        default:
            return state;
    }
}