function repeatString(){
    const texto = document.getElementById("textoRepetir").value;
    const repeticiones= parseInt(document.getElementById("repeticiones").value);
    const resultado= document.getElementById("resultadoRepetir");

    resultado.innerHTML = "";

    for(let i=0; i<repeticiones; i++){
        const p = document.createElement("p");
        p.textContent = texto;
        resultado.appendChild(p);
    }
}

function reverseString(){
    const texto = document.getElementById("textoInvertir").value;
    const resultado = document.getElementById("resultadoInvertir");

    const textoInvertido = texto.split("").reverse().join("");
    const p = document.createElement("p");
    p.textContent = textoInvertido;
    
    resultado.innerHTML = "";
    resultado.appendChild(p);

}