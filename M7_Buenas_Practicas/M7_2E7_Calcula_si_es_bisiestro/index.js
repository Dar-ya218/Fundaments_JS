function calculate() {
    const yearUser = Number(document.getElementById("year").value);
    const leapEear = yearUser % 4 
    if (leapEear === 0 ) {
    document.getElementById("result").innerHTML = `El año ${yearUser} es bisiesto`
}
 if (leapEear !==0 ) {
    document.getElementById("result").innerHTML = `El año ${yearUser} no es bisiesto`
 }
}