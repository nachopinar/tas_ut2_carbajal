let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4];

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

function duplicates(){
    let repeticiones = {};
    let duplicados = {}
    arreglo.forEach(numero => {
      repeticiones[numero] = (repeticiones[numero] || 0) + 1; //si no esta arranca en 0, si no suma 1 cada vez que aparece
    });

    Object.keys(repeticiones).forEach(numero => {
        if(repeticiones[numero] > 1){
            duplicados[numero] = repeticiones[numero];
        }
    });

    const resultado = document.getElementById("duplicados");
    resultado.innerHTML = " ";

    Object.keys(duplicados).forEach(numero => {
        const h4 = document.createElement("h4");
        h4.textContent = numero;
        resultado.appendChild(h4);

        const p = document.createElement("p");
        p.textContent = "Apariciones: " + duplicados[numero];
        resultado.appendChild(p);
    });
   
}
document.getElementById("botonDuplicados").addEventListener("click", duplicates); 


