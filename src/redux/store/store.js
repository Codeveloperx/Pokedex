import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducersRegister } from "../reducers/reducersRegister";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    storeRegister: reducersRegister,
})


export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
        )
);