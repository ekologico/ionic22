let peticion = new XMLHttpRequest()
const URL_SERVICIO="http://10.1.2.10:8090/api/alumnos/calcularLetraDni?dni="

window.onload = function () {
    document.getElementById("btn_comprobar_dni").addEventListener("click", calcularLetra);
};

function calcularLetra(){
let numero= document.getElementById("dni").value
let nombre= document.getElementById("nombre").value
peticion.onreadystatechange = procesarRespuesta
let url_destino = URL_SERVICIO+numero+"&nombre="+nombre

peticion.open('GET', url_destino )
peticion.send(null)

}

function procesarRespuesta(){
if (peticion.readyState=4 && peticion.status ==200 ){
    console.log(" recibidooooo y ok")
   console.log("reibido" )+ peticion.responseText
   document.getElementById("respuesta").innerHTML = peticion.responseText

}else{
    console.log(" Upsssssssss, error")
}

}