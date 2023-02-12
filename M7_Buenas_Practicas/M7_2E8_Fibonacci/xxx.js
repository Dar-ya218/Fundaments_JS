let fibonacci = [0, 1];
let number = 0

function writeFibonacci() {
    const numUser = Number(document.getElementById("userNum").value);
 console.log(numUser)
    for (let i = 2; i <= numUser; i++) {
       
        number = fibonacci.at (- 1) + fibonacci.at (- 2);
        fibonacci.push(number)

    }
}
writeFibonacci();
console.log(writeFibonacci)

document.getElementById("result").innerHTML = `El resultado es ${fibonacci}`;