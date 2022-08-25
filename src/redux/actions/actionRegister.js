import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { REGISTER } from "../types/types";

export const actionRegister = (nombre, email, pass) => {

  return async(dispatch) => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass)
      await updateProfile(auth.currentUser, {displayName: nombre})

      dispatch(actionRegisterSync(nombre, email, pass))
          // Signed in
          const user = userCredential.user;
          console.log(user)
        }
        catch (error) {
          const errorMessage = error.message;
          console.log(errorMessage)
        }
    }
}

export const actionRegisterSync = (nombre, email, pass) => {
    return{
        type: REGISTER,
        payload: {nombre, email, pass}
    }
}

