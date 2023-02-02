const resultList = [];

for (let i = 0; i < 5; i++) {
    const names = prompt("Introduce tu nombre completo, por favor: ")
    resultList.push(names);
}
console.log ("lista de personas: " + resultList);

alert ("Listado de los nombre para la beca es: " + resultList.join(", "));

    document.getElementById("result").innerHTML = ` La lista de personas admitidas es: ${resultList.join("<br>")}`
   