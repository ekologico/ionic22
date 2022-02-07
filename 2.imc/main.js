// hacer array de objetos imc 
// usar el array para mostrarHistoricos
// añadir a esta lista el valor nominal y la imagen
// permitir ordenar mayor menor 

let array_lista_resultados = new Array() // crea un array vacio, equivalente []
let array_lista_resultados_obesos = new Array()




window.onload = function () {
    controladoresEventos() // controladores de eventos 
};


/* 
controladores de eventos
*/

function controladoresEventos() {
    document.getElementById("calcular_imc").addEventListener("click", mainIMC);
    document.getElementById("boton_reset").addEventListener("click", reset);
    document.getElementById("boton_ordenar_amayor").addEventListener("click", ordenarArrayPorImcMayorAMayor);
    document.getElementById("boton_ordenar_amenor").addEventListener("click", ordenarArrayPorImcMayorAMenor);
    document.getElementById("boton_lista_de_obesos").addEventListener("click", filtro_lista_obesos);
    document.getElementById("boton_lista_de_general").addEventListener("click", filtro_lista_general);

}


/* mainIMC
recopila datos y muestra el resultado 
*/

function mainIMC() {
    let peso_usuario = obtenerPeso()
    let altura_usuario = obtenerEstatura()
    let objeto_imc = new ImcClase(altura_usuario, peso_usuario)

    array_lista_resultados.push(objeto_imc)
    mostrarHistoricos(array_lista_resultados)
}

/*****************************************************
 * IMC CLASE
 * 
 */

class ImcClase {
    //peso, altura
    constructor(altura, peso) {
        this.altura = altura
        this.peso = peso
        this.imc_calculado = this.calcularValor()
        this.valor_nominal = this.obtenerValorNominal()
        this.imagen = this.valor_nominal + ".jpeg"
        this.nombre = this.asignaNombre()
    }


    /* *****************************/
    asignaNombre() {

        let boleo = Math.floor((Math.random() * 6))
        let id = Math.floor((Math.random() * 100 + 1))
        let array_nombres = ["Juan", "Pedro", "Maria", "Almundena", "Miguel", "Alfredo"]
        let nombre = array_nombres[boleo] + "[" + id + "]"
        return nombre
    }


    calcularValor() {
        let respuesta = this.peso / (this.altura * this.altura)
        //resultado = resultado.toFixed(2);//redondeo a dos decimales
        respuesta = Math.round(respuesta)
        return respuesta
    }

    obtenerValorNominal() {
        let resultado
        if (this.imc_calculado < 16) {
            resultado = "Desnutrido";

        } else if ((this.imc_calculado >= 16) && (this.imc_calculado < 18)) {
            resultado = "Delgado";


        } else if ((this.imc_calculado >= 18) && (this.imc_calculado < 25)) {
            resultado = "Ideal";


        } else if ((this.imc_calculado >= 25) && (this.imc_calculado < 31)) {
            resultado = "Sobrepeso";


        } else if ((this.imc_calculado >= 31)) {
            resultado = "Obeso";

        }

        return resultado

    }

}




/* OBTENER */

//peso
function obtenerPeso() {
    peso = document.getElementById("peso").value
    return peso
}

//estatura
function obtenerEstatura() {
    estatura = document.getElementById("estatura").value
    return estatura
}



/* MOSTRAR RESULTADO */
/*

Entradas: imc calculado, 
salidas: no tiene

descripción: esta funcion informa al usuario por pantalla
de su valor IMC

precondiciones: el valor imc_calculado es un entero postivo

postcondiciones: se ha informado al usuario

*/

function mostrarResultado(imc_calculado) {

    {
        //   console.log("prueba global")
        //    console.log(prueba)

        let leyenda = document.getElementById("leyenda");
        let imagen = document.getElementById("imagen_imc");
        let valor_nominal;

        if (imc_calculado < 16) {
            valor_nominal = "Desnutrido";
            imagen.setAttribute('src', "./img/alerta_roja.jpeg")

        } else if ((imc_calculado >= 16) && (imc_calculado < 18)) {
            valor_nominal = "Delgado";
            imagen.src = "./img/alerta_amarilla.jpeg";

        } else if ((imc_calculado >= 18) && (imc_calculado < 25)) {
            valor_nominal = "Ideal";
            imagen.src = "./img/ok.png";

        } else if ((imc_calculado >= 25) && (imc_calculado < 31)) {
            valor_nominal = "Sobrepeso";
            imagen.src = "./img/alerta_amarilla.jpeg";

        } else if ((imc_calculado >= 31)) {
            valor_nominal = "Obeso";
            imagen.src = "./img/alerta_roja.jpeg";
        }

        leyenda.innerHTML = "Su IMC es [" + imc_calculado + "] está en el rango " + valor_nominal;

    }

}


/* anadirTabla
entrada: valor imc

Genera un párrafo en el div "historial" con el valor del input
*/
function anadirAHistorial(imc) {

    let historial = document.getElementById("historial"); // selecciona el objetivo
    let nueva_linea = document.createTextNode(imc); //crea un nodo texto con la info

    p = document.createElement("p"); // crea un nodo párrafo
    p.appendChild(nueva_linea); //añade la info 

    historial.appendChild(p); //añade texto al div creado.

}


function mostrarHistoricos(array_lista_resultados) {
    // let fila = document.createElement("tr")
    //  let columna_imc.createElement("td")


    console.log(array_lista_resultados)
    document.getElementById("historial2").html = ""
    let contador = 0
    let suma_imc = 0
    let media = 0
    let lineas = ""
    let tabla = ` 
                <table>
                    <tr>
                        <th>numero</th>
                        <th>nombre</th>
                        <th>imc</th>
                        <th>valor nominal</th>
                        <th>imagen</th>
                    </tr>
                    <tbody id="tabla_datos">
                    </tbody>
                </table>
                `
    document.getElementById("historial").innerHTML = tabla

    for (imc of array_lista_resultados) {
        contador++
        suma_imc = suma_imc + imc.imc_calculado
        //media = calcularMedia(contador,suma_imc,imc.imc_calculado)
        media = Math.round(suma_imc / contador)
        lineas = lineas + 
            `<tr>
                 <td> ${contador} </td>
                 <td> ${imc.nombre}</td>
                 <td> ${imc.imc_calculado}</td>
                 <td> ${imc.valor_nominal} </td>
                 <td><img src='./img/${imc.imagen}' width='20px'></td> 
             </tr>`
             
    }

    document.getElementById("tabla_datos").innerHTML = lineas
    document.getElementById("media").innerHTML = "la media del IMC es " + media
}


/*
RESET
sin entrada
limpia el div "historial" dejando el contenido en blanco
lipia todos los datos del formulario
limpia la imágen su leyenda

*/

function reset() {
    document.getElementById("historial").innerHTML = "";
    document.getElementById("estatura").innerHTML = "";
    document.getElementById("peso").value = "";
    document.getElementById("imagen_imc").src = "";
    document.getElementById("leyenda").innerHTML = "";
    array_lista_resultados = []
    array_lista_resultados_obesos = []

    //location.reload(); // otra forma de hacerlo

}

function test(variable) {
    console.log("------")
    console.log(variable)

}


function ordenarArrayPorImcMayorAMenor() {

    array_lista_resultados = array_lista_resultados.sort(function (a, b) {
        return (a.imc_calculado - b.imc_calculado)
    })
    mostrarHistoricos(array_lista_resultados)
}


function ordenarArrayPorImcMayorAMayor() {

    array_lista_resultados = array_lista_resultados.sort(function (a, b) {
        return (b.imc_calculado - a.imc_calculado)
    })
    mostrarHistoricos(array_lista_resultados)
}


function filtro_lista_obesos() {
    array_lista_resultados_obesos = []
    array_lista_resultados_obesos = array_lista_resultados.filter(imc => imc.valor_nominal == "Obeso")
    mostrarHistoricos(array_lista_resultados_obesos)

}


function filtro_lista_general() {
    document.getElementById("historial").innerHTML = "";
    mostrarHistoricos(array_lista_resultados)
}

function filtro_altura_mayor() {
    // mas_alto = array_lista_resultados.filter(imc => altura > 6);
}

/* funcion ordenar clase */
function ordenar_clase() {
    array_lista_resultados.sort(ordenarPorImcNumerico_clase)
    array_lista_resultados.forEach(imc => console.log())

}


function ordenarPorImcNumerico_claes(imc1, imc2) {
    let resultado
    if (imc1.imc_calculado > imc2.imc_calculado) {
        resultado = 1
    } else if (imc1.imc_calculado < imc2.imc_calculado) {
        resultado = -1
    } else {
        resultado = 0
    }
    return resultado
}
