import { ABILITIES, ERROR, FAVORITES, POKEMONS } from '../types/types'

const initialState = {
    pokemons: [],
    favorites: [],
    abilities: [],
    selected:[]
}

export const reducerPokemons = (state = initialState, action) => {
    switch(action.type){
        case POKEMONS:
            return {
                ...state,
                pokemons: [...action.payload.results],
            };
        case FAVORITES:
            return {
                ...state,
                favorites: [...action.payload.results],
            };
        case ABILITIES:
            return{
                ...state,
                abilities: [...action.payload.abilities],
            };
            case ERROR:
                return {
                  ...state,
                  error: action.payload.error
                };
        default:
            return state;
    }

}