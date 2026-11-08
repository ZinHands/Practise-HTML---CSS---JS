let formulario = document.querySelector("form");
let nombre = document.getElementById("name");
let vidas = document.getElementById("life");
let puntos = document.getElementById("points");

formulario.addEventListener("submit", guardado);

const jugadores = [];

function guardado(e) {
    e.preventDefault();

    let inputNombre = nombre.value.trim();
    let inputVidas = Number(vidas.value);
    let inputPuntos = Number(puntos.value);
    
    const jugador = {
        nombre: inputNombre,
        vidas: inputVidas,
        puntos: inputPuntos
    };

    jugadores.push(jugador);
    mostrar();
    
}

function mostrar() {
    let personas = document.getElementById("infoPerson");
    let ul = document.createElement("ul");
    let h2 = document.createElement("h2");
    h2.setAttribute("class", "listPlayers");
    h2.textContent = "Listado de jugadores";
    personas.innerHTML = "";

    for (const jugador of jugadores) {
            
        let li = document.createElement("li");
        let buttonLife = document.createElement("button"); 
        let buttonPoints = document.createElement("button");
        buttonLife.textContent = "Hacer daño";
        buttonLife.setAttribute("type", "button");
        buttonPoints.textContent = "Sumar puntos";
        buttonPoints.setAttribute("type", "button");
        personas.append(h2);
        personas.append(ul);
        ul.append(li);

        if (jugador.vidas > 1) {
            if (jugador.puntos > 1) {
                li.textContent = `${jugador.nombre} - ${jugador.vidas} vidas - ${jugador.puntos} pts`;
                li.append(buttonLife);
                li.append(buttonPoints);
            } else {
                li.textContent = `${jugador.nombre} - ${jugador.vidas} vidas - ${jugador.puntos} pt`;
                li.append(buttonLife);
                li.append(buttonPoints);
            }
        } else if (jugador.vidas === 1) {
            if (jugador.puntos === 1) {
                li.textContent = `${jugador.nombre} - ${jugador.vidas} vida - ${jugador.puntos} pt`;
                li.append(buttonLife);
                li.append(buttonPoints);
                li.style.color = "#a44";
            } else {
                li.textContent = `${jugador.nombre} - ${jugador.vidas} vida - ${jugador.puntos} pts`;
                li.append(buttonLife);
                li.append(buttonPoints);
                li.style.color = "#a44";
            }
        } else if (jugador.vidas === 0) {
                li.textContent = `${jugador.nombre}, perdiste!`;
                li.style.color = "red";
        }

        buttonLife.addEventListener("click", restar);

        function restar() {
            if (jugador.vidas > 0) jugador.vidas--;
            mostrar();
        }

        buttonPoints.addEventListener("click", sumar);

        function sumar() {
            let puntosRandom = Math.round(Math.random() * 20) + 1;
            jugador.puntos += puntosRandom;
            mostrar();
        }
    }
}