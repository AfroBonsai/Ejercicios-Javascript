// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 6 ----------------------------------------


// ---------- Input ----------

let numero = prompt("Indica el numero que quieres calcular");

let resultado = "";

// ---------- Process ----------

const cifras = (numero) => {

    if (numero >= 0 && !numero.includes(".")) {
        resultado = numero.toString().length;
        return "El numero " + numero + " contiene " + resultado + " números enteros positivos";

    } else {
        return "El número no es entero o positivo";
    }
}

resultado = cifras (numero);

// ---------- Output ----------

alert(resultado);



