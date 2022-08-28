import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducersRegister } from "../reducers/reducersRegister";
import {reducerLogin } from '../reducers/reducersLogin'
import {reducerPokemons} from '../reducers/reducersPokemon'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    storeRegister: reducersRegister,
    storeLogin: reducerLogin,
    storePokemons: reducerPokemons,
})


export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
        )
);