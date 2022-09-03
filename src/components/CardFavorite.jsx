import React from 'react'
import {Card, Dropdown} from 'flowbite-react'
import { Container } from '../styles/main'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { deletePokemonAsync } from '../redux/actions/actionPokemons'


const CardFavorite = ({favorite}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const deletePokemon = () =>{
    Swal.fire({
      title: '¿Estas seguro de eliminar este pokemon?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePokemonAsync({id: favorite.firestoreId}))
        Swal.fire('Pokemon Eliminado', '', 'success')
      }
    })
  }
  return (
    <Container className="pt-12">
      <div className="max-w-[10rem]">
        <Card>
          <div className="flex justify-end text-black">
          <Dropdown label="" inline={true} className='bg-black'>
  <Dropdown.Item onClick={()=> navigate(`/pokemon/${favorite.name}/edit`)} >
    <span className='text-orange-400'>Edit</span>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item onClick={deletePokemon}>
  <span className='text-red-600'>Delete</span>
  </Dropdown.Item>
</Dropdown>

          </div>

          <div className="flex flex-col items-center">
            <img
              className="mb-3 h-24 w-24"
              src={favorite.sprites.front_default}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {favorite.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              #0{favorite.id}
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6 text-black">
            {favorite.types.map((item, idx)=>{            
                    return <span key={idx} className="inline-flex items-center py-2 px-2 text-center text-sm font-medium">{item.type.name}</span>
                })}
            </div>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default CardFavorite