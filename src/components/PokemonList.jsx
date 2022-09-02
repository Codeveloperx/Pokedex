import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { useSelector, useDispatch} from 'react-redux'
import {actionPokemonsAsync} from '../redux/actions/actionPokemons'
import {Spinner} from 'flowbite-react'
import { Container } from '../styles/main'

const PokemonList = () => {
  const {pokemons, selected} = useSelector((store) => store.storePokemons);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!pokemons || pokemons.length === 0) {
      dispatch(actionPokemonsAsync());
    }
    setLoading(false)
  }, [pokemons, dispatch, loading])

  if(loading){
    return(
      <Container flex centrarContenido='center' CentrarItems='center' className='mt-[10rem]'>
        <Spinner 
          aria-label="Extra large spinner example"
          size="xl"
        />
        <span>Cargando.....</span>
    </Container>
    )
  }

  const renderCards = (pokemonSelect, list) => {
    let items = list;
    if (pokemonSelect && pokemonSelect.length) {
      items = pokemonSelect;
    }

    return items && items.length ? (
      items.map((item, index) => (     
        <PokemonCard key={index} datos={item}/>
      ))
  ):
  <div className='m-auto mt-[8rem] flex flex-col gap-2 items-center'>
      <Spinner aria-label="Extra large spinner example" size="xl"/>
      <span>Cargando...</span>
  </div>
}
  return (
    <div className='flex gap-5 flex-wrap px-5'>

      {renderCards(selected, pokemons)}
    </div>
  )
}

export default PokemonList