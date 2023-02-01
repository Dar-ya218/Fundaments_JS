function calculate() {
    const figureUser = document.getElementById("figure").value;

    const side =prompt(Number(document.getElementById("altura").value));
    const height = Number (document.getElementById("base").value);
    const radius = Number (document.getElementById("radius").value);

    const square = side * side
    const triangle = side * height/2
    const circle = Math.PI * radius **2
    const rectangle = side * height
     

    if (square) {
        document.getElementById("result").innerHTML= `EL area del ${figureUser} es de ${square}`
    }
    if (triangle) {
        document.getElementById("result").innerHTML= `EL area del ${figureUser} es de ${triangle}`
    }
    if (circle) {
        document.getElementById("result").innerHTML= `EL area del ${figureUser} es de ${circle.toFixed(2)}`
    }
    if (rectangle) {
        document.getElementById("result").innerHTML= `EL area del ${figureUser} es de ${rectangle.toFixed(2)}`
    }
    
}