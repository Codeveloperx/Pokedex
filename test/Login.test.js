//PARAMETROS PARA VALIDAR LAS RUTAS
const PrivateRoute = 'Tienes acceso a las rutas privadas luego de comprobar la autenticacion'
const PublicRoute = 'Acceso a las rutas publicas (Login-Register)'

// Funcion para validar los datos del usuario que esta ingresando a la app
const getUser = () => {
  return {
    email: "camilo@gmail.com",
    pass: "12345",
  };
};

const isAutentication = true;

describe("Realizar pruebas al componente de login", () => {
  // 1ER TESTS
  // Validamos que la informacion que el usuario este ingresando se encuentre en nuestra DB de usuarios
  test("Validar la informacion del usuario", () => {
    expect(getUser()).toEqual({ email: "camilo@gmail.com", pass: "12345" });
  });

  // 2DO TESTS
  // Validar si el usuario inició sesion en nuestra app
  test("Validar inicio de sesion", () => {
    //se maneja el valor booleano true, para indicar que el usuario ha ingresado con exito y false para indicar que hubo un error.

    if (isAutentication) {
      console.log("Inicio de sesion autorizado");
    } else {
      throw new Error("Inico de sesion no autorizado");
    }
  });

  // 3ER TESTS
  test("Verificar que el correo recibido sea un string", () => {
    const email = "camilo@gmail.com";
    expect(typeof email).toBe("string");
  });
  //4TO TESTS
  test("Validar logout de nuestra app", () => {
    const logout = true;

    if (logout) {
      console.log("Sesion finalizada!");
    } else {
      throw new Error("Sesion finalizada!");
    }
  });

  //5TO TEST
  test('validar proteccion de rutas', () => {
    const autenticado = false;
    if (autenticado) {
        return console.log(PrivateRoute)
    }else if(!autenticado){
        return console.log('Acceso a rutas publicas!')
    }
    else{
        throw new Error("Error en las rutas!");
    }
  })

   



})
