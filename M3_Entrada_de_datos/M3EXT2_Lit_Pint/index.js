function calculateLiter() {

    const oneLiter = 12
    console.log("oneliter" + oneLiter)
    const widthUser = Number(document.getElementById("widthWall").value);
    const heightUser = Number(document.getElementById("highWall").value);
    const hands = Number(document.getElementById("times").value);

    const surfaceUser = widthUser * heightUser;
    const literUser = surfaceUser / oneLiter;
    const totalLiter = literUser * hands;

    document.getElementById("result").innerHTML = `La pintura necesaria para pintar tu superficie de ${surfaceUser}m es de ${totalLiter} litros.`

}