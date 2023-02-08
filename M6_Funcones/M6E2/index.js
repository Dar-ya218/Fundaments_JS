
function askAge() {
    
    const firstUserAge = Number(document.getElementById("ageFirst").value);
    const secondUserAge = Number(document.getElementById("ageSecond").value);
    const thirdUserAge = Number(document.getElementById("ageThird").value);

    if (firstUserAge > 120 || firstUserAge < 0 || secondUserAge > 120 || secondUserAge < 0 || thirdUserAge > 120 || thirdUserAge < 0) {
        alert("La edad no es valido")
        throw Error ("Numero incorecto")
    }
    
    const result = [firstUserAge, secondUserAge, thirdUserAge]

    return result
}

function calcucateAge() {
    
    const userAge = askAge()
    const averAge = ( userAge[0] + userAge[1] + userAge[2]) / 3
    printResult(`Edad media de las tres personas ${userAge[0]}, ${userAge[1]} y ${userAge[2]} es ${averAge.toFixed()}`)

}
function printResult(value) {
    
    document.getElementById("result").innerHTML = value
}
