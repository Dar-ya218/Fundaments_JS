function writeFibonacci() {
 
    let numfib = [0, 1];
    let numUser = Number(document.getElementById("userNum").value);
    let number = 0

    for (let i = 0; i <= numUser; i++) {
        debugger
        number = numfib[i - 1] + numfib[i - 2]
        numfib.push(number)

    }
    document.getElementById("result").innerHTML = `El resultado es ${numfib}`;
}