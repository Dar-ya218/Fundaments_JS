function printRssult() {

    const nombre = document.getElementById("userName").value;
    console.log("Nama " + nombre);

    const surname = prompt("Enter your surname, please: ");
    console.log("Surname " + surname);

    const age = prompt("Put you age, please:");
    console.log("Age " + age);

    document.getElementById("resultWelcome").innerHTML = "Welcome " + nombre + " " + surname + " " + age;

    alert("Bienbenido "  + nombre  + " " + "Apellido " + surname + "Age " + age)
}
