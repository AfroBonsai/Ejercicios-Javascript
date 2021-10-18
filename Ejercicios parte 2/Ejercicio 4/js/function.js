// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 4 ----------------------------------------


// ---------- Input ----------

const num = parseInt(prompt("Introduce un número para calcular el factorial:"));

// ---------- Process ----------

const calculaFactorial = (parametro) => {

    let contador = [];

    for (let i = 1; i <= parametro; i++) {
        contador.push(i);
    }

    console.log(contador);

    let total = 1;

    for (let n = 0; n < contador.length; ++n) {
        total *= contador[n];
    }
    // ---------- Output ----------
    console.log(total);
    alert("Su factorial es de: " + total);
}

calculaFactorial(num);
