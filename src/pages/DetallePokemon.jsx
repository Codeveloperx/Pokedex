import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fillAbilitiesAsync } from "../redux/actions/actionPokemons";


const DetallePokemon = () => {
    const dispatch = useDispatch();
  const {abilities} = useSelector((store) => store.storePokemons);


  useEffect(() => {
    if (abilities.length === 0) {
      dispatch(fillAbilitiesAsync());
    }
  }, [abilities, dispatch]);
  return (
    <div>DetallePokemon</div>
  )
}

export default DetallePokemon