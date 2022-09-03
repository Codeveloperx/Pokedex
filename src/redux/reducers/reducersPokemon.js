import { ABILITIES, ADDPOKEMON, CLEARSEARCH, DELETEPOKEMON, ERROR, FAVORITES, POKEMONS, SELECTPOKEMON, UPDATEPOKEMON } from '../types/types'

const initialState = {
    pokemons: [],
    favorites: [],
    abilities: [],
    selected:[],
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
        case ADDPOKEMON:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case UPDATEPOKEMON:
            return{
                ...state,
                favorites: state.favorites.map(favorite => {
                    const item = favorite;
                    if (favorite.firestoreId === action.payload.firestoreId) {
                        item.height = action.payload.height;
                        item.weight = action.payload.weight;
                    }
                    return item;
                })
            };
        case DELETEPOKEMON:
            return{
                ...state,
                favorites: state.favorites.filter((favorite) => favorite.firestoreId !== action.payload.id)
            };
        case SELECTPOKEMON:
            return{
                ...state,
                selected: state.pokemons.filter(p => p.name === action.payload)
            };
        case CLEARSEARCH:
            return{
                ...state,
                selected:[]
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