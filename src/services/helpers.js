import axios from "axios";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const getPokemonByNameFromDatabase = (name) => {
    return new Promise((resolve, reject) => {
        try {
            const collectionUsers = collection(db, "pokemons");
            const querySnapshot = query(collectionUsers, where("name", "==", name));
            getDocs(querySnapshot).then(documents => {
                documents.forEach((document) => {
                    return resolve({
                        firestoreId: document.id,
                        ...document.data()
                    });
                });
            })
        } catch (error) {
            return reject(error);
        }
    })
}


export const getPokemonsAPI = (url) => {
    return new Promise((resolve, reject) => {
        axios(url)
            .then(({ data }) => {
                return resolve(data);
            }).catch(error => {
                console.log(error);
                return reject(error);
            });
    });
}

// Codigo de StackOverflow para obtener la evolucion de los pokemones
export const MapEvolutions = (chain) => {
    const evolutionsChain = [];
    // let evolutionsData = response.data.chain;
    let evolutionsData = chain;

    do {
        const evolutionDetails = evolutionsData['evolution_details'][0];

        evolutionsChain.push({
            "species_name": evolutionsData.species.name,
            "min_level": !evolutionDetails ? 1 : evolutionDetails.min_level,
            "trigger_name": !evolutionDetails ? null : evolutionDetails.trigger.name,
            "item": !evolutionDetails ? null : evolutionDetails.item
        });

        evolutionsData = evolutionsData['evolves_to'][0];
    } while (!!evolutionsData && evolutionsData.hasOwnProperty('evolves_to'));

    return evolutionsChain;
}

