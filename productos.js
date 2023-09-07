class Stock_fitness {
  constructor(producto, precio, stock) {
    this.producto = producto;
    this.precio = precio;
    this.stock = stock;
  }

  get_datos() {
    console.log("----productos----");
    console.log("producto:", this.producto);
    console.log("precio:", this.precio);
    console.log("stock:", this.stock);
  }

  get_stock() {
    if (this.stock > 0) {
      return true;
    } else {
      return false;
    }
  }

  renovar_stock(cantidades) {
    if (this.stock >= cantidades) {
      this.stock = this.stock - cantidades;
      return true;
    } else {
      console.log("No tenemos stock suficiente");
    }
  }
}

let listaProductos = [];

listaProductos.unshift(new Stock_fitness("proteina", 15000, 4));
listaProductos.unshift(new Stock_fitness("pressbanca", 40000, 2));
listaProductos.unshift(new Stock_fitness("gymball", 10000, 0));
listaProductos.unshift(new Stock_fitness("corebag", 8000, 10));
listaProductos.unshift(new Stock_fitness("creatina", 20000, 3));

for (let Stock_fitness of listaProductos) {
  if (Stock_fitness.stock > 0) {
    Stock_fitness.get_datos();
  }
}

let pregunta_lista = prompt(
  "¿quiere ver la lista de precios? responda con si o no"
);

let compraProducto;

let compraProductoPrompt = () => {
  compraProducto = prompt(
    "Ingrese el nombre del producto que desea comprar, disponemos de: creatina, corebag, gymball, pressbanca y proteina"
  );
};

do {
  if (pregunta_lista == "si") {
    console.log("Bienvenido al sistema");
    compraProductoPrompt();
    break;
  }
  if (pregunta_lista == "no") {
    console.log("Sistema finalizado");
    break;
  }
  if (pregunta_lista != "si" || "no") {
    console.log("Datos incorrectos, responda con si o no");
    pregunta_lista = prompt(
      "¿quiere ver la lista de precios? responda con si o no"
    );
  }
} while (pregunta_lista != "error");

function buscarProducto(Stock_fitness) {
  return Stock_fitness.producto == compraProducto;
}

let resultadoProducto = listaProductos.find(buscarProducto);

let cantidades;

do {
  if (resultadoProducto != undefined) {
    console.log("Su producto es:", resultadoProducto);
    if (resultadoProducto.get_stock()) {
      cantidades = prompt("¿cuantas unidades va querer?");
      if (resultadoProducto.renovar_stock(cantidades)) {
        console.log("Gracias por su compra - fitnessar ©");
      }
    }
    break;
  }
  if (resultadoProducto == undefined) {
    console.log("Producto inexistente:", compraProducto);
    break;
  }
} while (compraProducto != "error");
