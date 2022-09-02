import {getPokemonsAPI, MapEvolutions} from '../../services/helpers'
import dataPokemons from '../../services/urls';
import { ABILITIES, ADDPOKEMON, CLEARSEARCH, FAVORITES, POKEMONS, SELECTPOKEMON } from '../types/types';
import {db} from '../../firebase/firebaseConfig'
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import Swal from 'sweetalert2';

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


export const selectPokemon = (nombre) => {
  return {
    type: SELECTPOKEMON,
    payload: nombre
  }
}

export const clearSearch = () => {
  return {
    type: CLEARSEARCH
  }
}

export const fillFavoritesAsync = () => {
  return (dispatch) => {
    const collectionUsers = collection(db, "pokemons");
    const querySnapshot = query(collectionUsers);
    getDocs(querySnapshot)
      .then((documents) => {
        const details = [];
        documents.forEach((document) => {
          details.push({
            firestoreId: document.id,
            ...document.data(),
          });
        });

        dispatch(
          fillFavoritesSync({
            data: {
              results: details,
            },
            error: false,
          })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(fillFavoritesSync({ error: true }));
      });
  };
};



export const fillFavoritesSync = ({ data, error }) => {
  return {
    type: FAVORITES,
    payload: {
      results: data.results,
      error,
    },
  };
};


export const addPokemonAsync = (pokemon) => {
  return (dispatch) => {
    addDoc(collection(db, "pokemons"), pokemon)
      .then((docRef) => {
        dispatch(
          addPokemonSync({
            pokemon: {
              firestoreId: docRef.id,
              ...pokemon,
            },
          })
        );

        Swal.fire({
          icon: 'success',
          title: 'Congratulations',
          text: 'Add to favorites!'
        })
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`
        })
      });
  };
};

export const addPokemonSync = (params) => {
  return {
    type: ADDPOKEMON,
    payload: params.pokemon,
  };
};