function calculate() {
    const userNumber = Number(document.getElementById("userNum").value);
    let isPrime = undefined
    
    for (let index = 2; index < userNumber; index++) {

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

        document.getElementById("result").innerHTML = `El numero ${userNumber} no es primo`
    }
}
