function areYouAdult() {
    const namePerson = document.getElementById("nameUser").value;
    const agePerson = Number(document.getElementById("ageUser").value);

    if (agePerson>=18 || agePerson<125) {
        alert(`Welcome ${namePerson} eres mayor de edad`)
    }

    else{
    alert(`Welcome ${namePerson} eres menor de edad`)
}
document.getElementById("result").innerHTML= `Welcome ${namePerson}`
}