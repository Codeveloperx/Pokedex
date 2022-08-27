import {getPokemonsAPI, MapEvolutions} from '../../services/helpers'
import dataPokemons from '../../services/urls';
import { POKEMONS } from '../types/types';

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
  
//   export const fillFavoritesAsync = () => {
//     return (dispatch) => {
//       const collectionUsers = collection(dataBase, "pokemons");
//       const querySnapshot = query(collectionUsers);
//       getDocs(querySnapshot)
//         .then((documents) => {
//           const details = [];
//           documents.forEach((document) => {
//             details.push({
//               firestoreId: document.id,
//               ...document.data(),
//             });
//           });
  
//           dispatch(
//             fillFavoritesSync({
//               data: {
//                 results: details,
//               },
//               error: false,
//             })
//           );
//         })
//         .catch((error) => {
//           console.log(error);
//           dispatch(fillFavoritesSync({ error: true }));
//         });
//     };
//   };
  
//   export const fillFavoritesSync = ({ data, error }) => {
//     return {
//       type: typesPokemon.fillFavorites,
//       payload: {
//         results: data.results,
//         error,
//       },
//     };
//   };
  
//   export const addPokemonAsync = (pokemon) => {
//     return (dispatch) => {
//       addDoc(collection(dataBase, "pokemons"), pokemon)
//         .then((docRef) => {
//           dispatch(
//             addPokemonSync({
//               pokemon: {
//                 firestoreId: docRef.id,
//                 ...pokemon,
//               },
//             })
//           );
  
//           dispatch(errorSync({ error: false }));
//         })
//         .catch((error) => {
//           console.log(error);
//           dispatch(
//             errorSync({
//               error: true,
//             })
//           );
//         });
//     };
//   };
  
//   export const addPokemonSync = (params) => {
//     return {
//       type: typesPokemon.addPokemon,
//       payload: params.pokemon,
//     };
//   };
  
//   export const errorSync = (params) => {
//     return {
//       type: typesPokemon.error,
//       payload: {
//         error: params.error,
//       },
//     };
//   };
  
//   export const deletePokemonAsync = (params) => {
//     return (dispatch) => {
//       deleteDoc(doc(dataBase, "pokemons", params.id))
//         .then(() => {
//           dispatch(deletePokemonSync({ id: params.id }));
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };
//   };
  
//   export const deletePokemonSync = (params) => {
//     return {
//       type: typesPokemon.deletePokemon,
//       payload: {
//         id: params.id,
//       },
//     };
//   };
  
//   export const updatePokemonAsync = (item) => {
//     return (dispatch) => {
//       const docRef = doc(dataBase, "pokemons", item.firestoreId);
//       updateDoc(docRef, item)
//         .then(resp => {
//           dispatch(updatePokemonSync({ ...item, editPokemonError: false }));
//         })
//         .catch(error => {
//           console.log(error);
//           dispatch(updatePokemonSync({ ...item, editPokemonError: true }));
//         });
//     }
//   }
  
//   export const updatePokemonSync = (params) => {
//     return {
//       type: typesPokemon.updatePokemon,
//       payload: {
//         firestoreId: params.firestoreId,
//         height: params.height,
//         weight: params.weight,
//         abilities: params.abilities,
//         editPokemonError: params.editPokemonError
//       }
//     }
//   }
  
//   export const fillAbilitiesAsync = () => {
//     return (dispatch) => {
//       HttpGet(config.apiUrl.abilities)
//         .then(response => {
//           const abilities = response.results.map(item => ({ ability: item }))
//           dispatch(fillAbilitiesSync({ abilities }));
//         }).catch(error => {
//           console.log(error);
//         });
//     }
//   }


// import { getPokemonsAPI, MapEvolutions } from "../../services/helpers";
// import {dataPokemons} from '../../services/urls';
// import { lISTARPOKEMONS } from "../types/types";


// export const listarPokemonsAsync = () => {
//     return async (dispatch) => {
//         try{
//             const resp = await getPokemonsAPI(dataPokemons.urlAPI.pokemons);
//             const {data} = resp;
//             const detailsPromises = [];
            
//             for (let item of data.results){
//                 const pokemon = await getPokemonsAPI(dataPokemons.details(item.name));
//                 const species = await getPokemonsAPI(pokemon.data.species.url);
//                 const evolutions = await getPokemonsAPI(species.data.evolution_chain.url);

//                 detailsPromises.push({
//                     ...pokemon, 
//                     evolutions: MapEvolutions(evolutions.data.chain),
//                 });
//             }

                
//             const details = await Promise.all(detailsPromises);
//             console.log(details)
//             dispatch(listarPokemonsSync({data:{result: details}})
//             );

//         }catch(err){
//             return console.log(err);
//         }
//     }
// }


// export const listarPokemonsSync = ({data}) => {
//     return{
//         type: lISTARPOKEMONS,
//         payload: {
//             results: data.results
//         }
//     }
// }