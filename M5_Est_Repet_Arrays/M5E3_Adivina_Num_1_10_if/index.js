function check() {

    const userNum = Number(document.getElementById("numrerUser").value);
    const randoomNum = Math.ceil((Math.random() * 10));

    if (userNum === randoomNum) {
        return document.getElementById("result").innerHTML = `Enhorabuena, el número era ${randoomNum}`
    }
    if (userNum !== randoomNum) {
        return document.getElementById("result").innerHTML = `¡¡¡Ententa de nuevo!!!`
    }
    

}