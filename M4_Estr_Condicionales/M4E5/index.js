function myFunction() {
    const numOne = Number(document.getElementById("num1").value);
    const numTwo = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operat").value;

    if (operator ==="+") {
        const resultado = numOne + numTwo
        document.getElementById("result").innerHTML= `El resultado de su operacion es ${resultado.toFixed(2)}`
    }
    if (operator ==="-") {
        const resultado = numOne - numTwo
        document.getElementById("result").innerHTML= `El resultado de su operacion es ${resultado}`
    }
    if (operator ==="*") {
        const resultado = numOne * numTwo
        document.getElementById("result").innerHTML= `El resultado de su operacion es ${resultado.toFixed(2)}`
    }
    if (operator ==="/") {
        const resultado = numOne / numTwo
        document.getElementById("result").innerHTML= `El resultado de su operacion es ${resultado.toFixed(2)}`
    }

}