// -> Ejercicios JavaScript - 1


/*
Autor: George Zamfir
Versión: 1.0
 */


// ---------------------------------------- Ejercicio 4 ----------------------------------------


//---------- Input ----------

// Entrorno

const PI = 3.1416;
let radio;
let resultado;

//---------- Process ----------

radio = parseInt(prompt("Introduce un valor de radio:"));
resultado = PI * radio**2;

//---------- Output ----------

alert ("El resultado es " + resultado);
console.log ('Valor radio introducido: ' + radio);
console.log ('Área calculada: ' + resultado);

