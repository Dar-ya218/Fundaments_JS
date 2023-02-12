function run() {
    let isPrime = false;
    let text = "Ecribe un numero:";

    do {
        let userNumber = Number(prompt(text));
        isPrime = isNumberPime(userNumber);

        if (isPrime === true) {
            document.getElementById("result").innerHTML = `El numero ${userNumber} es primo`
        }
        if (isPrime === false) {
            text ="Intentalo de nuevo: "
        }
    } while (isPrime !== true);
}

function isNumberPime(n) {
    if (n < 2) {
      alert("Numero tiene que ser mayor que 1")
      return false;
    } else if (n === 2) {
      return true;
    }
  
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return false;
      }
      i +=1;
    }    
    return true;
  }
