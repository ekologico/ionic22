console.log("Cargando la página de DNI")
// TODO: Completar ejercicio
/* 
calcular la letra del DNI
Hacer una página que permita al usuario introuducir su dni y la letra

La app será capaz de saber si el dni es correcto o no..? 

para ello debe basarse en el algoritmo de la página del ministerio del interior
*/


document.getElementById("btn_comprobar_dni").addEventListener("click", validarDni);
//const SECUENCIAS_LETRAS_DNI = "trwagmyfpdxbnjzsqvhlcke"


/***********************************
 * funciones  ********************** 
 ***********************************/

/* validarDni */ 
function validarDni() {
    let dni_introducido = obtenerDniUsuario()
    let letra_introducida = obtenerLetraUsuario().toLowerCase()
    dni_introducido = filtroDNIExtranjero(dni_introducido)

    comprobarDNI(dni_introducido, letra_introducida)
    console.log("-> dni_introducido")
    console.log(dni_introducido)
}


/* comprobar DNI */
function comprobarDNI(dni_introducido, letra_introducida) {
    let letra_calculada
    let array_letras = ["t", "r", "w", "a", "g", "m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h", "l", "c", "k", "e"]

    resto = dni_introducido % 23
    console.log(dni)
    console.log(resto)

    letra_calculada = array_letras[resto]

    if (letra_introducida == letra_calculada) {
        pintarRespuesta("DNI correcto")
        
    } else {
        pintarRespuesta("No es correcto")
    }
}

/* pintar */ 
function pintarRespuesta(respuesta) {
    document.getElementById("respuesta").innerHTML = respuesta
}

/**************** 
** obtener 
*****************/

/* dni usuario */ 
function obtenerDniUsuario() {
    dni = document.getElementById("dni").value
    return dni
}

/* letra usuario */
function obtenerLetraUsuario() {
    letra = document.getElementById("letra").value
    return letra
}


/**************** 
** filtro
*****************/


/* filtro DNI extranjero */
function filtroDNIExtranjero(dni) {
   
   // let primer_caracter = dni.charAt(0)
    let primer_caracter= dni.substr(0, 1);
   console.log("*primer caracter")
    console.log(primer_caracter)

    if (isNaN(primer_caracter)) {
        console.log("tiene letra al inicio")
       
        switch (primer_caracter) {
            
            case "x":
                dni = dni.replace("x", "0");
                break;
            case "y":
                dni = dni.replace("y", "1");
                break;
            case "z":
                dni = dni.replace("z", "2");
                break;
        }
        dni = parseInt(dni)
       console.log("- dni cambiado")
        console.log(dni)
        return dni
    } else {
        console.log("no tiene letra al inicio")
        return dni
    }
}






