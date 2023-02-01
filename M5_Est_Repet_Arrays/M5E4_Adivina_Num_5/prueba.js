function start() {
    
    const randoomNum = Math.ceil(Math.random() * 10);
    console.log (randoomNum);

    let userNum = 5;
    userNum = Number (prompt("¡¡¡Introduce un numero!!!"))
  

   for (let i = 1; i < 5; i++) {
    userNum = Number (prompt("¡¡¡No es correcto, vuelve a intentar!!!"))
    }

    if (userNum !== randoomNum){
        document.getElementById("result").innerHTML = `"¡Has utilizado demasiados intentos! El número era ${randoomNum}`  
    }

   if (userNum === randoomNum) {
        document.getElementById("result").innerHTML = `Enhorabuena, el número era ${randoomNum}`
    }
    


   }
    

