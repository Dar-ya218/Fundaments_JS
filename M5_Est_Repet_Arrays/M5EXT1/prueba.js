function game() {
    const randomNumber = Math.ceil(Math.random() * 500);
    console.log(randomNumber);

    let userNumber = Number(prompt("Introduce tu numero: "));

    if (userNumber === randomNumber) {
        document.getElementById("result").innerHTML = `Falicidades, has adivinado. El numero era ${randomNumber}`
    }
    if (userNumber >= randomNumber + 50) {
        userNumber = Number(prompt("Frío, frío: tu número es mayor. ¡Sigue intentando! "));
    }
    if (userNumber <= randomNumber - 50) {
        userNumber = Number(prompt("Frío, frío: tu número es menor. ¡Sigue intentando! "));
    }
    if (userNumber >= randomNumber + 15) {
        userNumber = Number(prompt("Tibio, Tibio: tu número es mayor. ¡Sigue intentando! "));
    }
    if (userNumber <= randomNumber - 15) {
        userNumber = Number(prompt("Tibio, Tibio: tu número es menor. ¡Sigue intentando! "));
    }
    if (userNumber >= randomNumber + 1) {
        userNumber = Number(prompt("Caliente, Caliente: tu número es mayor. ¡Sigue intentando! "));
    }
    if (userNumber <= randomNumber - 1) {
        userNumber = Number(prompt("Caliente, Caliente: tu número es menor. ¡Sigue intentando! "));
    }
}