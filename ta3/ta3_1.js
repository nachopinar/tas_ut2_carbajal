function generatePassword() {
    const length = document.getElementById("longitud").value;
    if (length < 8) {
        document.getElementById("contraseña").innerHTML = "la contraseña debe tener al menos 8 caracteres";
    }

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    const allCharacters = upperCase + lowerCase + numbers + symbols;
    let password = "";

    //al menos un carácter de cada tipo
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    //restante de la contraseña
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    password = password.split('').sort(() => 0.5 - Math.random()).join('');


    document.getElementById("contraseña").innerHTML = " ";
    document.getElementById("contraseña").innerHTML = password;
}

document.getElementById("botonContraseña").addEventListener("click", generatePassword);


function displayPeople(people) {
    if (!Array.isArray(people) || people.length === 0) {
        console.log("El arreglo está vacío o no es un arreglo válido.");
        return;
    }

    const peopleContainer = document.getElementById("peopleContainer");
    peopleContainer.innerHTML = ""; // Limpiar contenido previo

    people.forEach(person => {
        const personInfo = document.createElement("p");
        personInfo.textContent = `${person.name}: ${person.age} años`;
        peopleContainer.appendChild(personInfo);
    });
}


const people = [
    { name: "Juan", age: 45 },
    { name: "Ana", age: 67 },
    { name: "Luis", age: 34 },
    { name: "María", age: 78 }
];

document.getElementById("BotonMostrarPersonas").addEventListener("click", () => displayPeople(people));


function findTheOldest(people) {
    if (!Array.isArray(people) || people.length === 0) {
        console.log("El arreglo está vacío o no es un arreglo válido.");
        return null;
    }

    // saco edades
    const ages = people.map(person => person.age);

    // Encontrar la mayor edad
    const maxAge = Math.max(...ages);

    // Filtrar para encontrar la persona con la mayor edad
    const oldestPeople = people.filter(person => person.age === maxAge);

    const oldestPerson = oldestPeople[0];


    document.getElementById("personaMasVieja").innerHTML = `${oldestPerson.name}: ${oldestPerson.age} años`;
}


document.getElementById("BotonMostrarViejo").addEventListener("click", () => findTheOldest(people));