import React from 'react'
import { Container } from '../styles/main'
import Poster from '../assets/Pokemon.png'
import Pokeball from '../assets/pokeball.svg'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { actionRegister } from '../redux/actions/actionRegister'


const Register = () => {

  const dispatch = useDispatch()

  const [dataForm, handleChange, reset] = useForm({
    nombre: '',
    email: '',
    password: ''
  });

  const {nombre, email, password} = dataForm
  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(actionRegister(nombre, email, password))
    reset()
  }

  return (
    <Container Width Height flex centrarContenido='center' CentrarItems='center' className='md:gap-20'>
      <article>
        <figure className='hidden md:block'>
          <img src={Poster} alt="Poster Ash" width='600' />
        </figure>
      </article>

      <article className="w-4/5 md:w-8/12 lg:w-5/12 lg:ml-20">
        <figure className=' flex justify-center items-center mb-10'>
          <img src={Pokeball} alt="pokeball logo" width='100' />
        </figure>

        <form onSubmit={handleSubmit} >
            {/* Name input  */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Full name"
              name='nombre'
              value={dataForm.nombre}
              onChange={handleChange}
            />
          </div>

          {/* Email input  */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              name='email'
              value={dataForm.email}
              onChange={handleChange}
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="mb-10">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              name='password'
              value={dataForm.password}
              onChange={handleChange}
            />
          </div>

          {/* <!-- Submit button --> */}
          <button
            type="submit"
            className="inline-block px-7 py-3 bg-[#f7522c] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out w-full"
          >
            Register
          </button>

          <p className="text-sm font-semibold mt-2 pt-1 mb-0 text-center mt-10">
              I have an account?
              <Link to='/'
                className="text-orange-600 hover:text-orange-700 focus:text-orange-700 transition duration-200 ease-in-out"
                > Login
                </Link>
            </p>
        </form>
      </article>
    </Container>
  )
}

export default Register