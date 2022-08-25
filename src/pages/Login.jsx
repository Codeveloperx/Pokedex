import React from 'react'
import { Container } from '../styles/main'
import Poster from '../assets/ashPoster.png'
import Pokeball from '../assets/pokeball.svg'
import Facebook from '../assets/facebook.svg'
import Google from '../assets/google.svg'
import { Link } from 'react-router-dom'
import {useForm} from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { actionLogin } from '../redux/actions/actionLogin'


const Login = () => {

  const dispatch = useDispatch()
  const [dataForm, handleChange, reset] = useForm({
    email: '',
    password: ''
  })

  const {email, password} = dataForm
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    await dispatch(actionLogin(email, password))
    reset()
  }

  return (
    <Container Width Height flex centrarContenido='center' CentrarItems='center' className='md:gap-20'>
      <article>
        <figure className='hidden md:block'>
          <img src={Poster} alt="Poster Ash" width='180' />
        </figure>
      </article>

      <article className="w-4/5 md:w-8/12 lg:w-5/12 lg:ml-20">
        <figure className=' flex justify-center items-center mb-10'>
          <img src={Pokeball} alt="pokeball logo" width='100' />
        </figure>

        <form onSubmit={handleSubmit}>
          {/* Email input  */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              value={dataForm.email}
              name='email'
              onChange={handleChange}
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="mb-2">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              value={dataForm.password}
              name='password'
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <button
              className="text-[#f7522c] hover:text-[#ec8e79] focus:text-[#ec8e79] active:text-[#ec8e79] duration-200 transition ease-in-out"
              >Forgot password?</button>
          </div>

          {/* <!-- Submit button --> */}
          <button
            type="submit"
            className="inline-block px-7 py-3 bg-[#f7522c] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out w-full"
          >
            Sign in
          </button>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

          <div className='flex justify-center items-center gap-5'>
            {/* <!-- Facebook --> */}
          <button>
            <img src={Facebook} alt="logo Facebook" width='30' />
          </button>

            {/* <!-- Google --> */}
          <button>
            <img src={Google} alt="logo google" width='30' />
          </button>
          </div>
          <p className="text-sm font-semibold mt-2 pt-1 mb-0 text-center mt-14">
              Don't have an account?
              <Link to='/register'
                className="text-orange-600 hover:text-orange-700 focus:text-orange-700 transition duration-200 ease-in-out"
                > Register
                </Link>
            </p>
        </form>
      </article>
    </Container>
  )
}

export default Login