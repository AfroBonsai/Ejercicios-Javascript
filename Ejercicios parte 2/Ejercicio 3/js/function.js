// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 3 ----------------------------------------


// ---------- Input ----------

const num = parseInt(prompt("Introduce un número para saber si es primo:"));

let esPrimo = true;

// ---------- Process ----------

if (num === 1) {
    console.log("El número 1 no es ni primo ni compuesto.");
}

else if (num > 1) {


    let calcularPrimo = (valorNumero) => {

        for (let i = 2; i < valorNumero; i++) {
            if (valorNumero % i === 0) {
                esPrimo = false;
                break;
            }
        }

    }

    calcularPrimo(num);

    // ---------- Output ----------

    if (esPrimo) {
        console.log("El número " + num + " SÍ es un número primo.");
        alert("El número " + num + " SÍ es un número primo.");
    } else {
        console.log("El número " + num + " NO es un número primo.");
        alert("El número " + num + " NO es un número primo.");
    }
}

// funcion

