function check() {
    
    const randoomNum = Math.ceil(Math.random() * 10);
    console.log (randoomNum);

    let userNum = Number( prompt("Introduce el numero"));

   while(userNum !== randoomNum){
   userNum = Number (prompt("¡¡¡No es correcto, vuelve a intentar!!!"))

   }

   if (userNum === randoomNum) {
        document.getElementById("result").innerHTML = `Enhorabuena, el número era ${randoomNum}`
    }
    


   }
    

