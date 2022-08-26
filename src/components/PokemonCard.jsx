import React from "react";
import { Card } from "flowbite-react";
import { Container } from "../styles/main";

const PokemonCard = () => {
  return (
    <Container Width className="pt-12">
      <div className="max-w-[10rem]">
        <Card>
          <div className="flex flex-col items-center">
            <img
              className="mb-3 h-24 w-24"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Mewtow
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              #001
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
