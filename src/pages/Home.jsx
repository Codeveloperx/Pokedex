import { Container } from '../styles/main'
import React from 'react'
import NavbarC from '../components/Navbar'
import Search from '../components/Search'
import PokemonCard from '../components/PokemonCard'


const Home = () => {
  return (
    <Container className='w-[100%]'>
    <NavbarC/>
    <Search/>
    <PokemonCard/>
    </Container>
  )
}

export default Home