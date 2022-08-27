import { Container } from '../styles/main'
import React from 'react'
import NavbarC from '../components/Navbar'
import Search from '../components/Search'
import PokemonList from '../components/PokemonList'

const Home = () => {

  return (
    <Container className='w-[100%]'>
    <NavbarC/>
    <Search/>
    <PokemonList />

    </Container>
  )
}

export default Home