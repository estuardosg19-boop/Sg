let boton=document.getElementById("boton")
let boton2=document.getElementById("boton2")
let contar=document.getElementById("contar")
let contador=0

boton.addEventListener("click",suma)
boton2.addEventListener("click",resta)

function suma(){
contador++
contar.textContent=contador
}
function resta(){
    contador--
    contar.textContent=contador
}