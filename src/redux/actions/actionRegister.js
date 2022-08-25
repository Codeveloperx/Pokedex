import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { REGISTER } from "../types/types";

export const actionRegister = (nombre, email, pass) => {

  return async(dispatch) => {
    try{
      await createUserWithEmailAndPassword(auth, email, pass)
      await updateProfile(auth.currentUser, {displayName: nombre})

      await dispatch(actionRegisterSync(nombre, email, pass))
        }
        catch (error) {
          const errorMessage = error.message;
          // console.log(errorMessage)
        }
    }
}

const actionRegisterSync = (nombre, email, pass) => {
    return{
        type: REGISTER,
        payload: {nombre, email, pass}
    }
}

