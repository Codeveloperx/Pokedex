import React, { useEffect, useState } from 'react'
import { Container } from '../styles/main'
import { useSelector, useDispatch } from 'react-redux'
import { fillFavoritesAsync } from '../redux/actions/actionPokemons'
import { Spinner } from 'flowbite-react'
import CardFavorite from '../components/CardFavorite'
import Logo from '../assets/logo.svg'

const Favorite = () => {
    const {favorites, selected} = useSelector((store) => store.storePokemons);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!favorites || favorites.length === 0) {
      dispatch(fillFavoritesAsync());
    }
    setLoading(false)
  }, [favorites, dispatch, loading])

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
        <CardFavorite key={index} favorite={item}/>
      ))
  ):
  <div className='m-auto mt-[8rem] flex flex-col gap-2 items-center'>
      <Spinner aria-label="Extra large spinner example" size="xl"/>
      <span>Cargando...</span>
  </div>
}
  return (
      <div className='flex justify-center flex-col items-center mt-10'>
        <figure>
          <img src={Logo} alt="" />
        </figure>
    <div className='flex gap-5 flex-wrap px-5'>

      {renderCards(selected, favorites)}
    </div>
    </div>
  )
}
export default Favorite