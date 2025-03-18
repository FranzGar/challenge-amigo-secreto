// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Challenge Amigo Secreto
//Francisco García Arellano
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const botonAñadir = document.querySelector('.button-add');
const botonSortear = document.querySelector('.button-draw');

let amigos = [];

inputNombre.addEventListener('input', function() {
    botonAñadir.disabled = false;  
});

function agregarAmigo() {
    let nombre = inputNombre.value.trim();  

    if (!esNombreValido(nombre)) {
        alert("Ingrese un nombre válido");  
        inputNombre.value = ""; 
        return;
    }

    amigos.push(nombre);

    inputNombre.value = "";

    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    listaAmigos.innerHTML = "";  
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function esNombreValido(nombre) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(nombre) && nombre.length > 0;
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Añade al menos dos amigos para sortear.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    listaAmigos.innerHTML = "";


    resultado.innerHTML = `<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;

    botonAñadir.disabled = true;
    botonSortear.disabled = true;

    inputNombre.disabled = true;
}


