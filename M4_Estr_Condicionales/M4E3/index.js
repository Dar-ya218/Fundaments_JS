function myFunction() {
    const namePerson = document.getElementById("nameUser").value;
    const agePerson = document.getElementById("ageUser").value;
    const titelPers = document.getElementById("titel").value;
    const noWork = document.getElementById("work").value
    const mesage = ("")

    if (agePerson >= 18 && titelPers === "si" || noWork === "si") {
        document.getElementById("result").innerHTML = "¡¡¡Usted tiene una beca!!!"
        alert("Felicidades" + namePerson)

    }
    else {
        document.getElementById("result").innerHTML = "¡Lo siento, usted no puede aceder a beca!"
    }
}