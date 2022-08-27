import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { useSelector, useDispatch} from 'react-redux'
import {actionPokemonsAsync} from '../redux/actions/actionPokemons'
import {Spinner} from 'flowbite-react'
import { Container } from '../styles/main'

const PokemonList = () => {
  const {pokemons} = useSelector((store) => store.storePokemons);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!pokemons || pokemons.length === 0) {
      dispatch(actionPokemonsAsync());
      setLoading(false)
    }
  }, [pokemons, dispatch])

  if(loading){
    return(
      <Container flex centrarContenido='center' CentrarItems='center'>
        <Spinner
          aria-label="Extra large spinner example"
          size="xl"
        />
        <span>Cargando.....</span>
    </Container>
    )
  }

  return (
    <div className='flex gap-5 flex-wrap px-5'>
        {
            pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.id} datos={pokemon}/>
            })
        }
    </div>
  )
}

export default PokemonList