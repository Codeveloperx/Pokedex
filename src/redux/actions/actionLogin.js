import { signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';
import {auth} from '../../firebase/firebaseConfig'
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