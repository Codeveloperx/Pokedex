import { REGISTER } from "../types/types";

const initialState = {}

export const reducersRegister = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                name: action.payload.nombre,
                email: action.payload.email,
                pass: action.payload.pass
            }

        default:
            return state;
    }

}