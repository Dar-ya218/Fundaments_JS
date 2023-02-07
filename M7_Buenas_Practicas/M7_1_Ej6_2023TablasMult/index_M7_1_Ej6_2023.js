/* const numTable = Number(document.getElementById("inputUserNum").value)
const tablaMulti = getElementById(=tabla-tablaMulti) */

  function calculate(){
    let num = document.getElementById("inputUserNum").value;
    let tablaMulti = ['']
  
  for (let i = 1; i <= 10; i++) {
    
    tablaMulti+= num+ "x" + i + "=" + num * i + "<br>";
  }

  document.getElementById("result").innerHTML = tablaMulti
}

function eraser() {
  document.getElementById("result").innerHTML = ""
}