

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