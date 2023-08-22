let usuario = "Mora";
let clave = "Zamora";
let intentos = 1;
let claveUsuario;
let nombreUsuario;

function UsuarioPrompt() {
  nombreUsuario = prompt("Ingrese su nombre de usuario");
}

function usuarioCorrecto() {
  console.log("Correcto", nombreUsuario);
}

function usuarioIncorrecto() {
  console.log("Nombre de usuario incorrecto");
}

function usuarioFin() {
  console.log("Usuario inexistente");
}

for (let i = 0; i < 5; i = i + 1) {
  UsuarioPrompt();

  if (nombreUsuario == usuario) {
    usuarioCorrecto();
    break;
  }

  if (nombreUsuario != usuario && intentos < 4) {
    usuarioIncorrecto();
    intentos = intentos + 1;
    continue;
  }

  if (intentos == 4) {
    usuarioFin();
    break;
  }
}

function clavePrompt() {
  claveUsuario = prompt("Ingrese su clave");
}

function claveBienvenida() {
  console.log("Bienvenido/a a la pagina de prestamos:", nombreUsuario);
}

function claveIncorrecta() {
  console.log("Clave de usuario incorrecta");
}

function claveFin() {
  console.log("Cuenta suspendida por seguridad");
}

for (let i = 0; i < 4; i = i + 1) {
  clavePrompt();

  if (claveUsuario == clave) {
    claveBienvenida();
    break;
  }

  if (claveUsuario != clave && intentos < 3) {
    claveIncorrecta();
    intentos = intentos + 1;
    continue;
  }

  if (intentos == 3) {
    claveFin();
    break;
  }
}
