// -> Ejercicios JavaScript - 1


/*
Autor: George Zamfir
Versión: 1.0
 */


// ---------------------------------------- Ejercicio 10 ----------------------------------------


// ---------- Input ----------

let numeroVentas = prompt ("Introduce el número de ventas:");

let precioVentas = 0;

//---------- Process ----------

numeroVentas = parseInt (numeroVentas);

for (i=1; i <= numeroVentas ; i++) {
        var precioProductos = prompt("Introduce el precio del producto "+i);

};
let sumaVentas = prompt("Introduce el precio de la venta");
precioVentas = precioVentas + parseFloat(sumaVentas);

//---------- Output ----------

console.log(precioVentas)

