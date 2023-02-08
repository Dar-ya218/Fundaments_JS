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

function menu(id) { // cuando das al boton en html, que estan numerados
    if (id === 1) { // si es primero con numero 1, cumpe conla condicion de addDate()
        addDate()
    }
    if (id === 2) {
        
        const position = searchNumber(52, [9,52,1,47,85,8])
        console.log(position)
    }

}

