function calculate() {
    
    const numUno = Number(document.getElementById("num1").value);
    const numDos = Number(document.getElementById("num2").value);

    let numerList = []
    let result = 0

    for (let index = numUno; index <= numDos; index++) {
        result= result + index;
        numerList.push(index)
        
    }

    document.getElementById("result").innerHTML= ` El resultado ${ numerList.join(" +")} = ${result}`
    console.log(numerList)
}


