document.addEventListener("DOMContentLoaded", function () {
    let tamano = 200;
    let colores = ["red", "green", "blue"];
    let colorIndex = 0;

    function crecer() {
        tamano += 10;
        if (tamano > 420) {
            tamano = 200;
        }
        document.getElementById("globo").style.width = tamano + "px";
        document.getElementById("globo").style.height = tamano + "px";
    }

    function encoger() {
        tamano -= 5;
        if (tamano < 200) {
            tamano = 200;
        }
        document.getElementById("globo").style.width = tamano + "px";
        document.getElementById("globo").style.height = tamano + "px";
    }

    function cambiarColor() {
        colorIndex = (colorIndex + 1) % colores.length;
        document.getElementById("globo").style.backgroundColor = colores[colorIndex];
    }

    document.getElementById("globo").addEventListener("mouseover", crecer);
    document.getElementById("globo").addEventListener("mouseout", encoger);
    document.getElementById("globo").addEventListener("click", cambiarColor);
});
