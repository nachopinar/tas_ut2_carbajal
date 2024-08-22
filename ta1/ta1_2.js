let arreglo = ["perro", "gato", "loro", "pez", "elefante", "tigre"];
let libros = [
    {
        titulo: "El Sapo Ruperto",
        autor: "Roy Berocay",
    },
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
    },
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling",
    },
];

function removeFromArray() {
    const item = document.getElementById("item").value;
    const index = arreglo.indexOf(item);
    const resultadoDiv = document.getElementById("resultadoEliminar");

    if (index !== -1) {
        arreglo.splice(index, 1);
        resultadoDiv.innerHTML = "Elemento eliminado. Arreglo resultante: " + JSON.stringify(arreglo);
    } else {
        resultadoDiv.innerHTML = "No se encontró el elemento";
    }
}

function getTheTitles(){
    const titulos = libros.map(libro => libro.titulo);
    const resultado = document.getElementById("titulosLibros");

    resultado.innerHTML = " ";

    titulos.forEach(titulo => {
        const h1 = document.createElement("h1");
        h1.textContent = titulo;
        resultado.appendChild(h1);
    })

}

