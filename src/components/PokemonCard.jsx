import React from "react";
import { Card } from "flowbite-react";
import { Container } from "../styles/main";

const PokemonCard = ({datos}) => {
  return (
    <Container className="pt-12">
      <div className="max-w-[10rem]">

        <Card>
          <button style={{width:'fit-content'}}> 
            <svg style={{color: 'black'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </button>
          <div className="flex flex-col items-center">
            <img
              className="mb-3 h-24 w-24"
              src={datos.sprites.front_default}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {datos.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              #0{datos.id}
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6 text-black">
              <span className="inline-flex items-center py-2 px-2 text-center text-sm font-medium">Fire</span>
              <span className="inline-flex items-center py-2 px-2 text-center text-sm font-medium">Magic</span>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default PokemonCard;
