function calculate() {

const friends = Number(document.getElementById("numFriends").value);

const noodlsPerPerson = 0.125
const squidPerPerson = 0.1
const shrimpPerPerson = 0.05

const noodlsPriceKg = Number(document.getElementById("priceNoodls").value);
const squidPriceKg = Number(document.getElementById("priceNoodls").value);
const shrimpPriceKg = Number(document.getElementById("priceNoodls").value);

let message = `${noodlsPerPerson*friends} de noodls ${squidPerPerson*friends} de calamares ${shrimpPerPerson*friends} de gambas`
let unitPrice = noodlsPerPerson*noodlsPriceKg + squidPerPerson*squidPriceKg + shrimpPerPerson*shrimpPriceKg
let totalPrice = unitPrice*friends
document.getElementById("result").innerHTML = `El precio por persona es ${unitPrice} <br> El precio total es ${totalPrice} <br> La cantidad utilizada es de ${message}`
    
}

