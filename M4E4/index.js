function myFunction() {
    const month = Number(document.getElementById("month").value);

    switch (month) {
        case 1:
            alert("Mes de enero tiene 31 dias.")
            break;

        case 2:
            alert("Mes de febrero tiene 28 dias.")
            break;

        case 3:
            alert("Mes de marzo tiene 31 dias.")
            break;

        case 4:
            alert("Mes de abril tiene 30 dias.")
            break;

        case 5:
            alert("Mes de mayo tiene 31 dias.")
            break;

        case 6:
            alert("Mes de junio tiene 30 dias.")
            break;

        case 7:
            alert("Mes de julio tiene 31 dias.")
            break;

        case 8:
            alert("Mes de agosto tiene 30 dias.")
            break;

        case 9:
            alert("Mes de septiembre tiene 31 dias.")
            break;

        case 10:
            alert("Mes de octubre tiene 28 dias.")
            break;

        case 11:
            alert("Mes de noviembre tiene 31 dias.")
            break;

        case 12:
            alert("Mes de diciembre tiene 30 dias.")
            break;

        default:
            alert("¡Introduce un mes corecto por favor!")
    }
}