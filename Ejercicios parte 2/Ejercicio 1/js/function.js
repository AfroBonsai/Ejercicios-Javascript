// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 1 ----------------------------------------


// ---------- Input ----------

const PI = 3.1416;

let radio = "";
let base = "";
let altura = "";
let lado = "";

figura = prompt("Introduce la figura que quieres calcular (circulo, triangulo, cuadrado):");

if (figura == "circulo") {

    radio = prompt("Introduce el radio del círculo:");
    radio = parseInt(radio);
}

if (figura == "triangulo") {

    base = prompt("Introduce la base del triángulo:");
    base = parseFloat(base);
    altura = prompt("Introduce la altura del triángulo:");
    altura = parseFloat(altura);
}

if (figura == "cuadrado") {

    lado = prompt("Introduce el lado del cuadrado:");
    lado = parseFloat(lado);
}

// ---------- Process ----------

let areaCirculo = Circulo(radio);

let areaTriangulo = Triangulo(base, altura);

let areaCuadrado = Cuadrado(lado);


function Circulo(r) {
    return (r ** 2) * PI;
}

function Triangulo(b, a) {
    return (b * a) / 2;
}

function Cuadrado(l) {
    return l * l;
}

// ---------- Output ----------

switch (figura) {
    case "circulo":
        alert("El area de un círculo con radio " + radio + " es " + areaCirculo);
        break;
    case "triangulo":
        alert("El area de un triangulo con base " + base + " y altura " + altura + " es " + areaTriangulo);
        break;
    case "cuadrado":
        alert("El area de un cuadrado con un lado de " + lado + " es " + areaCuadrado);
        break;

    default:
}

