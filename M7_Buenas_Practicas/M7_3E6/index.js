function addEvenAndOdd() {
    const length = Number(document.getElementById("numUser").value)
    let addEven = 0
    let addOdd = 0
    for (let i = 1; i < length; i++) {
        const isEven = i % 2 === 0
        isEven ? addEven += i : addOdd += i
    }

    document.getElementById("result").innerHTML = `La suma de los pares es ${addEven} y suma de impares es ${addOdd}`
}

