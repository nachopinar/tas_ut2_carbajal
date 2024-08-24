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