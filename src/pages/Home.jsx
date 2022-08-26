import { Container } from '../styles/main'
import React from 'react'
import NavbarC from '../components/Navbar'
import Search from '../components/Search'


const Home = () => {
  return (
    <Container className='w-[100%]'>
    <NavbarC/>
    <Search/>
    </Container>
  )
}

export default Home