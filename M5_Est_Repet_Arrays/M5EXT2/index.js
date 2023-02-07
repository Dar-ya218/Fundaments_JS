 function myFunction() {
    
    const asteriscosVertLength = Number(document.getElementById("inputNum").value);
    const asteriscosHorizLength = parseInt(asteriscosVertLength / 2)+1;

    let verticalL = [];
    let horizontalL = [];

    for (let i = 0; i < asteriscosVertLength; i++) {
        verticalL.push('*<br>')
    }

    for (let i = 0; i < asteriscosHorizLength; i++) {
        horizontalL.push('*')

    }

    document.getElementById('result').innerHTML = `${verticalL.join("")} ${horizontalL.join(" ")} `;
}