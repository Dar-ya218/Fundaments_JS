function start() {
    
    const randoomNum = Math.ceil(Math.random() * 10);
    console.log (randoomNum);

    let userNum = Number(prompt("¡¡¡Introduce un numero!!!"))
    let tries = 0
   
   for (let i = 1; i < 5; i++) {
    tries++
       
       if (userNum !== randoomNum){
           document.getElementById("result").innerHTML = `"¡Has utilizado demasiados intentos! El número era ${randoomNum}`  
        }
        
        if (userNum === randoomNum) {
            document.getElementById("result").innerHTML = `Enhorabuena, el número era ${randoomNum} lo has adibinado al ${tries} intento`
            return
        }
        
        userNum = Number(prompt("¡¡¡No es correcto, vuelve a intentar!!!"))
        }


   }
    

