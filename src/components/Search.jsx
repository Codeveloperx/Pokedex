import { Container } from "../styles/main";
import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { selectPokemon, clearSearch } from "../redux/actions/actionPokemons";


const Search = () => {

    const [showButton, setShowButton] = useState(false)
    const [dataForm, handleChange, reset] = useForm({
        nombre: ''
    })
    const dispatch = useDispatch();
    const {nombre} = dataForm

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(selectPokemon(nombre));
        setShowButton(true)
    }

    const clear = (e) => {
      e.preventDefault()
      dispatch(clearSearch())
      setShowButton(false)
      reset()

    }
  return (
    <Container Width>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
            </svg>
          </div>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Pokemons..."
            required=""
            value={dataForm.nombre}
            onChange={handleChange}
          />
          <button
          style={{display: !showButton ? 'block' : 'none'}}
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
          <button
          onClick={clear}
          style={{display: showButton ? 'block' : 'none'}}
          className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Search;

{

}
