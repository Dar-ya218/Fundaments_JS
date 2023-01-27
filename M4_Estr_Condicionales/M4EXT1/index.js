function calculate() {
    const dividendoUser = Number(document.getElementById("dividendo").value);
    const divisorUser = Number(document.getElementById("divisor").value);
    const result = dividendoUser / divisorUser

    if (result===0) {
        document.getElementById("result").innerHTML= `Su numero ${dividendoUser} es multiple por ${divisorUser}`}
        else{
        document.getElementById("result").innerHTML= `Su numero ${dividendoUser}  no es multiple por ${divisorUser}`
    }
    
    
}