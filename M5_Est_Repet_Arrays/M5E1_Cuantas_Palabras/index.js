function myFunction() {

    let arrayWords = []
    const wordNumber = Number(document.getElementById("numUser").value);
    
    console.log("numero " + wordNumber)

    for (let i = 0; i < wordNumber; i++) {
        const word = prompt("Introduce tu palabra, por favor: ");
        arrayWords.push(word);

        console.log("palabras " + word)
        
        document.getElementById("result").innerHTML = `Las palabras que has introducido son: ${arrayWords}` 
    
    }
    alert("Las palabras introcucidas son: " + arrayWords);
}