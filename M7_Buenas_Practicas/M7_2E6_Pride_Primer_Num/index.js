function calculate() {
    let userNumber = Number(prompt("Ecribe un numero:"));
    let isPrime = undefined
    
    for (let index = 2; index < userNumber; index++) {
debugger
        if (userNumber % index === 0) {
            isPrime = false
            //console.log (isPrime)
            //return
        }

        else if (isPrime !== false) {
            isPrime = true
        }
    }
    //console.log (isPrime)
    if (isPrime === true) {
        document.getElementById("result").innerHTML = `El numero ${userNumber} es primo`
    }
    if (isPrime === false) {

        userNumber = prompt("Intentalo de nuevo: ")
    }
    //document.getElementById("result").innerHTML = `El numero ${userNumber} no es primo`
}
