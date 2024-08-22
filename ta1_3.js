let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarArreglo() {
    const arregloDiv = document.getElementById("arregloNumeros");
    arregloDiv.innerHTML = ""; // Limpiar el contenido previo

    arreglo.forEach(elemento => {
        const p = document.createElement("p");
        p.textContent = elemento;
        arregloDiv.appendChild(p);
    });
}

// Añadir el event listener al botón
document.getElementById("botonMostrar").addEventListener("click", mostrarArreglo);

function getOdds() {
    const impares = arreglo.filter(numero => numero % 2 !== 0);
    const resultado = document.getElementById("arregloImpares");

    resultado.innerHTML = " ";

    impares.forEach(numero => {
        const numaux = document.createElement("numaux");
        numaux.textContent = numero + " ";
        resultado.appendChild(numaux);
    })
}

document.getElementById("botonImpares").addEventListener("click", getOdds);



