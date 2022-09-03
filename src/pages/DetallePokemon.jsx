import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fillAbilitiesAsync, updatePokemonAsync } from "../redux/actions/actionPokemons";
import { useParams, useNavigate } from "react-router-dom";
import { TextInput } from "flowbite-react";
import { getPokemonByNameFromDatabase } from "../services/helpers";


const DetallePokemon = () => {
  const dispatch = useDispatch();
  const { pokemons, abilities, favorites } = useSelector((store) => store.storePokemons);
  const { name, action } = useParams();
  const [editar] = useState(action === 'edit' ? true : false)
  const navigate = useNavigate();

  let pokemon = null;
  if (!action) {
    pokemon = pokemons.find((pok) => pok.name === name);
  } else {
    pokemon = favorites.find((fav) => fav.name === name);
  }

  const pokemonAbilities = pokemon.abilities.map(({ ability }) => ({
    name: ability.name,
    url: ability.url,
  }));

  // UseState para editar el peso, edad y habilidades del pokemon
  const [height, setHeight] = useState(pokemon.height);
  const [weight, setWeight] = useState(pokemon.weight);
  const [SelectAbility, setSelectAbility] = useState(pokemonAbilities);

  const getEvolutionImages = (currentPokemon, allPokemons) => {
    if (!currentPokemon || !currentPokemon.evolutions) return null;

    const index = currentPokemon.evolutions.findIndex(
      (pe) => pe.species_name === currentPokemon.name
    );

    if (index < 0) return null;

    const numberOfEvolutions = currentPokemon.evolutions.length - 1 - index;

    if (numberOfEvolutions === 0) return null;

    const nextEvolution = currentPokemon.evolutions[index + 1];
    if (nextEvolution) {
      const nextEvolutionFound = allPokemons.find(
        (p) => p.name === nextEvolution.species_name
      );
      if (!nextEvolutionFound) return null;

      return {
        currentPokemonImage: pokemon.sprites.front_default,
        nextEvolutionImage: nextEvolutionFound.sprites.front_default,
        nextEvolutionName: nextEvolutionFound.name,
      };
    }
  };

  const evolution = getEvolutionImages(pokemon, pokemons);

  useEffect(() => {
    if (abilities.length === 0) {
      dispatch(fillAbilitiesAsync());
    }
  }, [abilities, dispatch]);


  const handleSubmit = async(e) => {
    e.preventDefault();   
    
    const PokemonDB = await getPokemonByNameFromDatabase(pokemon.name);
    dispatch(updatePokemonAsync({
      firestoreId: PokemonDB.firestoreId,
      height: parseInt(height),
      weight: parseInt(weight)
    }))
    
  }
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <div className="w-40"></div>
      </div>

      {/* Modal detalle pokemon */}

      {/* <!-- Modal toggle --> */}
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mt-28">
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-4">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-[0.5rem] rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {pokemon.name}
              </h3>
              <button
                onClick={() => navigate(-1)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* <!-- Modal body --> */}

            <div className="flex flex-col items-center">
              <img
                src={pokemon.sprites.front_default}
                alt={`imagen de ${pokemon.name}`}
                width="120"
              />
              <h1 className="bg-slate-700 w-full text-white p-2 text-lg font-semibold pl-5">
                Profile
              </h1>

                <div className="text-black flex justify-between gap-28 mt-2 mb-2">
                  <div className="font-semibold flex flex-col gap-2">
                    <span className="block">Height:</span>
                    <span className="block">Weight:</span>
                    <span className="block">Abilities:</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <TextInput style={{padding: '0.2rem'}}
                    className='border-0'
                    id="height"
                    type="text"
                    name="height"
                    disabled={!editar}
                    defaultValue={pokemon.height}
                    onChange={(e) => setHeight(e.target.value)}
                    autoFocus

                    />
                    <TextInput style={{padding: '0.2rem'}}
                    className='border-0'
                    id="height"
                    type="text"
                    name="height"
                    disabled={!editar}
                    defaultValue={pokemon.weight}
                    onChange={(e) => setWeight(e.target.value)}
                    autoFocus
                    />

                    <div>

                    {pokemonAbilities.map((item, idx) => {
                      return <span key={idx}>{item.name}, </span>;
                    })}
                    
                    </div>

                  </div>
                </div>

              <h1 className="bg-slate-700 w-full text-white p-2 text-lg font-semibold pl-5">
                Evolutions
              </h1>

              <div className="text-black flex justify-between gap-28 mt-2 mb-2">
                {evolution ? (
                  <div>
                    <h2>Evolves to {evolution.nextEvolutionName}</h2>
                    <div className="flex gap-2">
                      <img src={evolution.currentPokemonImage} alt="" />
                      <img src={evolution.nextEvolutionImage} alt="" />
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2>{pokemon.evolutions[0].species_name} Last Evolution</h2>
                    <img src={pokemon.sprites.front_default} alt="" />
                  </div>
                )}
              </div>
            </div>
            
            {/* Modal Footer */}
            <>
            {
              editar && (
                <div className="flex items-center p-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="submit" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"                  
                >Save</button>
              </div>
              )  
            }
            
            </>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DetallePokemon;
