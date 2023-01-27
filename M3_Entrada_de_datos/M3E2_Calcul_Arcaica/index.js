function calculate() {

    const numFirst = Number(document.getElementById("firstUserNum").value);
    const numSecond = Number(document.getElementById("secondUserNum").value);

    const summ = numFirst + numSecond;
    const rest = numFirst - numSecond;
    const mult = numFirst * numSecond;
    const div = numFirst / numSecond;

    document.getElementById("summImp").innerHTML = ("La summa es : ") + summ;
    document.getElementById("restImp").innerHTML = ("La resta es : ") + rest;
    document.getElementById("multImp").innerHTML = ("La multiplicacion es : ") + mult;
    document.getElementById("splitImp").innerHTML = ("La divicion es : ") + div;
}




