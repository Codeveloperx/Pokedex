import { signInWithEmailAndPassword } from 'firebase/auth';
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
      // Signed in

    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage)
    }
  };
};

const actionLoginSync = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}