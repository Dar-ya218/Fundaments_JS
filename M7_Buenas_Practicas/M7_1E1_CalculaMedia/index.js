function calculate() {

    const firNum = Number(document.getElementById("firstNoteInp").value)
    const secNum = Number(document.getElementById("secondNoteInp").value)
    const thirNum = Number(document.getElementById("thirdNoteInp").value)

    const media = (firNum + secNum + thirNum) / 3

    document.getElementById("result").innerHTML = `Tu resultado promedio de ${firNum} y ${secNum} y ${thirNum} es de ${media.toFixed(1)} `
}