//DOM Y EVENTOS

document.addEventListener("DOMContentLoaded", function () {
  let Formulario = document.getElementById("Formulario");
  let inicio = document.getElementById("inicio");

  let storedUser = localStorage.getItem("user");

  if (storedUser) {
    inicio.textContent = `¡Hola, ${storedUser}! ya ingresaste!.`;
    Formulario.style.display = "none";
  } else {
    Formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;

      //LOCALSTORAGE
      if (username === "joaquin" && password === "zamora") {
        localStorage.setItem("user", username);

        inicio.textContent = `¡bienvenido a la tienda, ${username}! :)`;
        Formulario.style.display = "none";
      } else {
        inicio.textContent = "Contraseña incorrecta, intentalo de nuevo.";
      }
    });
  }
});

//DOM Y EVENTOS CARRITO
let carrito = document.getElementsByClassName("agregarCarrito");
console.log(carrito);

let addCarrito = (e) => {
  console.log("Producto agregado al carrito", e.target);
};

for (let boton of carrito) {
  boton.addEventListener("click", addCarrito);
}

//LOCALSTORAGE Y JSON CARRITO
let aggCarrito = (Nombre, precio) => {
  let changuito = JSON.parse(localStorage.getItem("cart")) || [];
  changuito.push({ Nombre, precio });
  localStorage.setItem("cart", JSON.stringify(changuito));
};
