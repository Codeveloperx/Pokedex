import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { REGISTER } from "../types/types";
import Swal from 'sweetalert2'

export const actionRegister = (nombre, email, pass) => {

  return async(dispatch) => {
    try{
      await createUserWithEmailAndPassword(auth, email, pass)
      await updateProfile(auth.currentUser, {displayName: nombre})
      await dispatch(actionRegisterSync(nombre, email, pass))
      
      // Alerta para notificar al usuario que todo ha ido bien!
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario Creado exitosamente!',
        showConfirmButton: false,
        timer: 1500
      })
        }
        catch (error) {
          const errorMessage = error.message;
          // Alerta por si sucede algun error
          Swal.fire({
            title: 'Error!',
            text: `${errorMessage}`,
            icon: 'error'
          })
        }
    }
}

const actionRegisterSync = (nombre, email, pass) => {
    return{
        type: REGISTER,
        payload: {nombre, email, pass}
    }
}

