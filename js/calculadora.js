//Eventos son los onclick, la funcion add en este caso hace que
//al pulsar el boton se añada el texto en la pantalla
function add(data) {
    document.getElementById("pantalla").value += data;

}

function suma() {
// Guardo el valor de pantalla en la variable opernadoA
    operandoA = document.getElementById("pantalla").value;
// Asigno "case" de operacion para mas tarde usar con la funcion resolver 
    operacion = "+";
// Limpio la pantalla para el siguiente valor
    limpiar();

}

function resta() {
    operandoA = document.getElementById("pantalla").value;
    operacion = "-";
    limpiar();

}

function multiplicacion() {
    operandoA = document.getElementById("pantalla").value;
    operacion = "*";
    limpiar();

}

function division() {
    operandoA = document.getElementById("pantalla").value;
    operacion = "/";
    limpiar();

}

function resultado() {
// Asigna el segundo valor a operandoB al hacer click
    operandoB = document.getElementById("pantalla").value;
//Ejecuta la funcion de resolver para calcular el resultado
    resolver();
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function resetear() {
    document.getElementById("pantalla").value = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver() {
    let result = 0;
    switch (operacion) {
        case "+":
            result = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            result = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "*":
            result = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case "/":
            result = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    }
    resetear();
    document.getElementById("pantalla").value = result;

    
}



//variables
// var pantalla = document.getElementById("pantalla");
// let reset = document.getElementById("reset");
// let sumar = document.getElementById("sumar");
// let restar = document.getElementById("restar");
// let multiplicar = document.getElementById("multiplicar");
// let dividir = document.getElementById("dividir");
// let igual = document.getElementById("igual");
// let cero = document.getElementById("cero");
// let uno = document.getElementById("uno");
// let dos = document.getElementById("dos");
// let tres = document.getElementById("tres");
// let cuatro = document.getElementById("cuatro");
// let cinco = document.getElementById("cinco");
// let seis = document.getElementById("seis");
// let siete = document.getElementById("siete");
// let ocho = document.getElementById("ocho");
// let nueve = document.getElementById("nueve");
let operandoA;
let operandoB;
let operacion;