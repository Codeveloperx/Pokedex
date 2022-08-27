import {getPokemonsAPI, MapEvolutions} from '../../services/helpers'
import dataPokemons from '../../services/urls';
import { ABILITIES, POKEMONS, SELECTPOKEMON } from '../types/types';

export const actionPokemonsAsync = () => {
    return async (dispatch) => {
      try {
        const resp = await getPokemonsAPI(dataPokemons.urlApi.pokemons);
        const detailsPromises = [];

        for (const item of resp.results) {
          const pokemon = await getPokemonsAPI(dataPokemons.detail(item.name));
          const species = await getPokemonsAPI(pokemon.species.url);
          let evolutions = await getPokemonsAPI(species.evolution_chain.url);
          detailsPromises.push({
            ...pokemon,
            evolutions: MapEvolutions(evolutions.chain),
          });
        }
  
        const details = await Promise.all(detailsPromises);
  
        dispatch(
          actionPokemonsSync({
            data: {
              results: details,
            },
            error: false,
          })
        );
      } catch (error) {
        dispatch(actionPokemonsSync({ error: true }));
      }
    };
  };
  
  export const actionPokemonsSync = ({ data, error }) => {
    return {
      type: POKEMONS,
      payload: {
        results: data.results,
        error,
      },
    };
  };
  


// 
export const fillAbilitiesAsync = () => {
  return (dispatch) => {
    getPokemonsAPI(dataPokemons.urlApi.abilities)
      .then(response => {
        const abilities = response.results.map(item => ({ ability: item }))
        dispatch(fillAbilitiesSync({ abilities }));
      }).catch(error => {
        console.log(error);
      });
  }
}

export const fillAbilitiesSync = (params) => {
  return {
    type: ABILITIES,
    payload: {
      abilities: params.abilities
    }
  }
}