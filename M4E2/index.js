function calculate() {
    const agePerson = Number(document.getElementById("ageUser").value);

    if (agePerson<=5 || agePerson>0) {
        document.getElementById("result").innerHTML=  ` Su nivel para matricularse es en el preescolar, con la edad de ${agePerson}`
    }
    else if (agePerson >= 6 || agePerson<= 11) {
        document.getElementById("result").innerHTML=  ` Su nivel para matricularse es en el primaria, con la edad de ${agePerson}`
    }
    else if (agePerson >= 12 || agePerson<= 15) {
        document.getElementById("result").innerHTML=  ` Su nivel para matricularse es en el ESO, con la edad de ${agePerson}`
    }
    
}

