

function translateNum() {

    const number = Number(document.getElementById("numUser").value);
    console.log("NumeroUsuario"+ number)
    let numUnit = ['zero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    let dozens = ['diec', 'veinti', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    let resultado

    if (number <= 15) {
        switch (number) {

            case 0: resultado = numUnit[0]; break;
            case 1: resultado = numUnit[1]; break;
            case 2: resultado = numUnit[2]; break;
            case 3: resultado = numUnit[3]; break;
            case 4: resultado = numUnit[4]; break;
            case 5: resultado = numUnit[5]; break;
            case 6: resultado = numUnit[6]; break;
            case 7: resultado = numUnit[7]; break;
            case 8: resultado = numUnit[8]; break;
            case 9: resultado = numUnit[9]; break;
            case 10: resultado = 'diez'; break;
            case 11: resultado = 'once'; break;
            case 12: resultado = 'doce'; break;
            case 13: resultado = 'trece'; break;
            case 14: resultado = 'catorce'; break;
            case 15: resultado = 'quince'; break;
        }
    }

    if (number > 15 && number < 20) {
        switch (number) {
            case 16: resultado = dozens[0] + 'i' + numUnit[6]; break; // dieciseis
            case 17: resultado = dozens[0] + 'i' + numUnit[7]; break; // diecisiete
            case 18: resultado = dozens[0] + 'i' + numUnit[8]; break; // dieciocho
            case 19: resultado = dozens[0] + 'i' + numUnit[9]; break; // diecinueve
        }

    }


    if (number >= 20 && number < 30) {
        switch (number) {
            case 21: resultado = dozens[1] + numUnit[1]; break;
            case 22: resultado = dozens[1] + numUnit[2]; break;
            case 23: resultado = dozens[1] + numUnit[3]; break;
            case 24: resultado = dozens[1] + numUnit[4]; break;
            case 25: resultado = dozens[1] + numUnit[5]; break;
            case 26: resultado = dozens[1] + numUnit[6]; break;
            case 27: resultado = dozens[1] + numUnit[7]; break;
            case 28: resultado = dozens[1] + numUnit[8]; break;
            case 29: resultado = dozens[1] + numUnit[9]; break;

        }

    }
     if (number >= 30 && number < 40) {
        const unit = number - 30
        resultado = dozens[2] + ' y ' + numUnit[unit]; break;
        
    } 
    document.getElementById('result').innerHTML = resultado;
}