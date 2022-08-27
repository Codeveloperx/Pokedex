import React, { useEffect } from "react";
import { Card } from "flowbite-react";
import { Container } from "../styles/main";
import { useNavigate} from 'react-router-dom'

const PokemonCard = ({datos}) => {
  const navigate = useNavigate();
  
  return (
    <Container className="pt-12">
      <div className="max-w-[10rem]">
        <Card>
          <div className="flex justify-between">
          <button style={{width:'fit-content'}}> 
            <svg style={{color: 'black'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </button>

          <button onClick={()=> navigate(`/pokemon/${datos.name}`)} style={{width:'fit-content'}}>
          <svg style={{color: 'black'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          </button>

          </div>

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
