function printTriangle(){
    const baselenght = Number(document.getElementById("userNum").value)
    
    let horizontalLine = ""
    
    const  triangle = []
    
    for (let index = baselenght; index >= 1; index--) {
        horizontalLine = horizontalLine + "*"
        triangle.push(horizontalLine)
        
        
    }
    document.getElementById("results").innerHTML = triangle.join("<br>")
}