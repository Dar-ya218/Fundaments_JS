function check() {
    const firstNum = Number(document.getElementById("num1").value);
    const secondNum = Number(document.getElementById("num2").value);
    console.log(firstNum + "Numero")

    const firstNumIsPositive = Math.sign(firstNum);
    const secondNumIsPositive = Math.sign(secondNum);

    console.log(firstNumIsPositive)

    if (firstNumIsPositive === -1 || secondNumIsPositive=== -1 ) {
        document.getElementById("result").innerHTML = " Uno de los numeros es negativo"
    }

    if (firstNumIsPositive ===1 && secondNumIsPositive=== 1  ) {
        document.getElementById("result").innerHTML = " Ninguno de los numeros es negativo"
    }

}