// -> Ejercicios JavaScript - 1


/*
Autor: George Zamfir
Versión: 1.0
 */


// ---------------------------------------- Ejercicio 5 ----------------------------------------


// ---------- Input ----------

let num = prompt("introduce un numero");

const DOS = 2;

//---------- Process ----------

if (num % DOS == 0) {
    text = " es un número par.";
}
else {
    text = " no es un número par.";
}

//---------- Output ----------

alert("El número " + num + text)
console.log("Número elegido: " + num);
console.log(num + text);

