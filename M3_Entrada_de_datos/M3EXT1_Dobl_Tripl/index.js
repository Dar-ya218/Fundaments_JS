function calculate() {
    const numberUser = Number(document.getElementById("userNumInp").value);

    const doble = numberUser * 2;
    const tripl = numberUser * 3;

    document.getElementById("resultDoble").innerHTML = `El resultado doble de su numero ${numberUser} es ${doble}`
    document.getElementById("resultTrip").innerHTML = `El resultado triple de su numero ${numberUser} es ${tripl}`

}