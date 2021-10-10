
// -> Ejercicios JavaScript - 1


/*
Autor: George Zamfir
Versión: 1.0
 */


// ---------------------------------------- Ejercicio 13 ----------------------------------------


let operando1 = parseInt(prompt("Introduce el primer número:"));

let operando2 = parseInt(prompt("Introduce el segundo número:"));

let signoAritmetico = prompt("Introduce el signo aritmético (+ - * / ^ %):");

let resultado = "";

switch (signoAritmetico) {
    case "+":
        resultado = operando1 += operando2;
        alert (resultado);
        break;

    case "-":
        resultado = operando1 -= operando2;
        alert (resultado);
        break;

    case "*":
        resultado = operando1 *= operando2;
        alert (resultado);
        break;

    case "/":
        resultado = operando1 /= operando2;
        alert (resultado);
        break;

    case "^":
        resultado = operando1 ** operando2;
        alert (resultado);
        break;

    case "%":
        resultado = operando1 % operando2;
        alert (resultado);
        break;


    default:
        
        break;
}





















        // // ---------- Input ----------

        // let operando1 = prompt("Introduce el primer número:");

        // let operando2 = prompt("Introduce el segundo número:");

        // let signoAritmetico = parseInt(prompt("Introduce el signo aritmético (+ - * / ^ %):"));

        // let resultado = "";
        // // ---------- Process ----------

        // let algo = Calculo(operando1, operando2);

        // function Calculo(a, b) {
        //     return resutlado = a + signoAritmetico + b;
        //     console.log(resultado);
        // }
        // console.log(resultado);
// console.log(Calculo);


// ---------- Output ----------