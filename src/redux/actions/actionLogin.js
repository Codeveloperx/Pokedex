import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2';
import {auth, providerFacebook, providerGoogle} from '../../firebase/firebaseConfig'
import { LOGIN } from '../types/types';

export const actionLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await dispatch(actionLoginSync(user))
      console.log(user)
      // Signed in

    } catch (error) {
      const errorMessage = error.message;
      // Alerta por si sucede algun error
      Swal.fire({
        title: 'Error!',
        text: `${errorMessage}`,
        icon: 'error'
      })
    }
  };
};

const actionLoginSync = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}


// Login con Google
export const loginGoogle = () => {
  return async(dispatch) =>{
    try{
      const result = await signInWithPopup(auth, providerGoogle)
      const user = result.user;
      dispatch(actionLoginSync(user))
    }catch(error){
      const errorMessage = error.message;
      // Alerta en caso de error!
      Swal.fire({
        title: 'Error!',
        text: `${errorMessage}`,
        icon: 'error'
      })
    }
  }
}


// Login con Facebook
export const loginFacebook = () => {
  return async(dispatch) => {
    try{
      const result = await signInWithPopup(auth, providerFacebook)
      const user = result.user;
      dispatch(actionLoginSync(user))
    }catch(error){
      const errorMessage = error.message;
      // Alerta en caso de error!
      Swal.fire({
        title: 'Error!',
        text: `${errorMessage}`,
        icon: 'error'
      })
    }
  }
}