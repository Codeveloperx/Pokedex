import { Container } from "../styles/main";
import React from "react";
import { useForm } from "../hooks/useForm";

const Search = () => {

    const [dataForm, handleChange, reset] = useForm({
        search: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dataForm.search)
        reset()
    }
  return (
    <Container Width>
      <form onSubmit={handleSubmit} className="mt-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
          Search
        </label>
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
            type="search"
            id="search"
            name="search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Pokemons..."
            required=""
            value={dataForm.search}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Search;

{

}
