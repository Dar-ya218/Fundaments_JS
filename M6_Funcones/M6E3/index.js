const inTime = [] // el array vacio, para que se puede guardar la informacion

function addDate() { // entra aqui, porque han dado al primer boton

    const hourDateNow = new Date() // el metodo para que automaticamente de de la fecha y la hora
    inTime.push(hourDateNow) // metodo push nos sube en array la hora y fecha actual
    console.log(inTime) // en la console comprobamos que funcione y realmente nos saca la hora y fecha
}

function searchNumber(number, arrayNumbers) {

    let result = -1
    for (let index = 0; index < arrayNumbers.length; index++) {

        if (arrayNumbers[index] === number) {
            result = index
        }
    }
    return result
}

function converterPhrase(userPhrase) {

    let resultPhrase1 = userPhrase.toLowerCase();
    let resultPhrase2 = resultPhrase1.replaceAll("!", "");
    let resultPhrase3 = resultPhrase2.replaceAll(" ", "");
    let resultPhrase4 = resultPhrase3.replaceAll(".", "");
    alert(resultPhrase4)
    
}
function findSchoolSubject(array, subject) {
    
}

function menu(id) { // cuando das al boton en html, que estan numerados
    if (id === 1) { // si es primero con numero 1, cumpe conla condicion de addDate()
        addDate()
    }
    if (id === 2) {
        const position = searchNumber(number, [arreyNum])
        console.log(position)
    }
    if (id === 3) {
        let userPhrase = document.getElementById("phraseUser").value;
        console.log(userPhrase)
        converterPhrase(userPhrase)
    }
    if (id === 4) {

        findSchoolSubject(
            ['Historia universal',
                'Historia de España',
                'Geografía',
                'Historia de la lengua catalana',
                'Antropología',
                'Inglés'],
            "Historia")
    }

}

