let registro = document.getElementById("registerForm");
let producto = document.getElementById("product");
let cantidad = document.getElementById("amount");
let precio = document.getElementById("price");

const productos = [];

registro.addEventListener("submit", guardado);

function guardado(e) {

    e.preventDefault();

    let productoIngresado = producto.value.trim();
    let cantidadIngresada = Number(cantidad.value);
    let precioIngresado = Number(precio.value);

    let productoGuardado = {
        producto: productoIngresado,
        cantidad: cantidadIngresada,
        precio: precioIngresado
    };

    productos.push(productoGuardado);
    console.log(productos);
}

let compra = document.getElementById("buyForm");
let compraProducto = document.getElementById("buyProducts");
let botonCantidad = document.createElement("button");
botonCantidad.setAttribute("type", "submit");
botonCantidad.textContent = "Comprar";


compra.addEventListener("submit", comparar);

function comparar(e) { // lo que pongo con el slash es porque me ayudo chatgpt
    e.preventDefault();

    let compraIngresada = compraProducto.value.trim(); //
    let encontrado = false; //

    let resultado = document.getElementById("result");
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "payAmount");
    resultado.append(li);
    

    for (const producto of productos) {
        if (compraIngresada === producto.producto) { //
            encontrado = true; //

            li.textContent = `${producto.producto} - cantidad `;    
            li.append(input);
            resultado.append(botonCantidad);
            console.log("Producto encontrado"); //
            break; //
        } 
    }

    if (encontrado === false) { //
        console.log("Producto no encontrado"); //
    }

}

resultado.addEventListener("click", comprar);
