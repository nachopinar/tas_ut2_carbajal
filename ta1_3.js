let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getOdds() {
    const impares = arreglo.filter(numero => numero % 2 !== 0);
    const resultado = document.getElementById("impares");

    resultado.innerHTML = " ";

    impares.forEach(numero => {
        const h1 = document.createElement("h1");
        h1.textContent = numero;
        resultado.appendChild(h1);
    })
}



