

function sumAll(){
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado").innerHTML = sum;
}

document.getElementById("botonSuma").addEventListener("click", sumAll);


function convertToCelsius(){
    const temp = parseInt(document.getElementById('tempF').value);
    const result = (temp - 32) * 5/9;
    document.getElementById("resultCelsius").innerHTML = "";
    document.getElementById("resultCelsius").innerHTML = result.toFixed(1);
}

document.getElementById("botonAC").addEventListener("click", convertToCelsius);



function convertToFahrenheit(){
    const temp = parseInt(document.getElementById('tempC').value);
    const result = temp * 9/5 + 32;
    document.getElementById("resultFahrenheit").innerHTML = "";
    document.getElementById("resultFahrenheit").innerHTML = result.toFixed(1);
}

document.getElementById("botonAF").addEventListener("click", convertToFahrenheit);


function leapYears(){
    const year = parseInt(document.getElementById("year").value);
    let result = false;
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        result = true;
    }
    document.getElementById("resultBisiesto").innerHTML = "";
    document.getElementById("resultBisiesto").innerHTML = result;
}

document.getElementById("botonBisiesto").addEventListener("click", leapYears);


let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarArreglo() {
    const arregloDiv = document.getElementById("arregloNumeros");
    arregloDiv.innerHTML = ""; // Limpiar el contenido previo

    arr.forEach(elemento => {
        const p = document.createElement("p");
        p.textContent = elemento;
        arregloDiv.appendChild(p);
    });
}

document.getElementById("botonArreglo").addEventListener("click", mostrarArreglo);


function getSum(){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    document.getElementById("sumaArreglo").innerHTML = "";
    document.getElementById("sumaArreglo").innerHTML = sum;
}

document.getElementById("botonSumaArreglo").addEventListener("click", getSum);







