import { Container } from '../styles/main'
import React from 'react'
import Search from '../components/Search'
import PokemonList from '../components/PokemonList'

const Home = () => {

  return (
    <Container className='w-[100%]'>
    <Search/>
    <PokemonList />
    </Container>
  )
}

export default Home