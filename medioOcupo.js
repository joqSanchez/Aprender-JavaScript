

//      Para redondear un numero a la presicion dada:  toFixed()

let n = 1.23456;

console.log( n.toFixed(2) ); // 1.23


//      toString() En numeros :Convierte el umero a una cadena de texto Sirve: mostrar el numero en pantalla, concatenarlo con otros textos, usarlo en formularios,url etc.

let edad = 25;
let mensaje = "Tengo " + edad.toString() + " años";

console.log(mensaje); // 👉 "Tengo 25 años"

// tambien puede servir para convertir el numero a otras bases numericas

let num = 10;

console.log(num.toString(2));  // 👉 "1010"  (binario)
console.log(num.toString(8));  // 👉 "12"    (octal)
console.log(num.toString(16)); // 👉 "a"     (hexadecimal)


// Pero en General el (toString()) Sirve para par convertir algo a texto ya sea: fecha,numeros,objetos,arrays,booleanos

//                                     Redondeo

Math.floor//redondea hacia abajo 3.1 pasa a 3 y -1.1 pasa a -2
Math.ceil//Redondea Hacia arriba 3.1 pasa a 4 y -1.1 pasa a -1
Math.round//Redondea  hacia el entero mas cercanoo 3.1 pasa a 3, 3.6 pasa a 4, 3.5 pasa a 4 y -3.5 pasa a -3
Math.trunc//Remueve lo que haya tras el punto decimal sin redondear 3.1 pasa a 3 y -1.1 pasa a -1

Math.random()//Devuelve un numero aleatorio entre 0 y 1(no incluyendo 1)

//Math.max() y Math.min():  Devuelven el mayor y menor de entre una cantidad arbitraria de argumentos

console.log( Math.max(3, 5, -10, 0, 1) ); // 5
console.log( Math.min(1, 2) ); // 1

Math.pow(n,power)//Devuelve n elevado a la potencia power dada
console.log( Math.pow(2, 10) ); // 2 elevado a la potencia de 10 = 1024


//          Letras

//      Para convertir un string en mayuscula se pone: toUpperCase()

function nombre() {
    let name = "joqsan"
}

console.log(nombre.name.toUpperCase());

// toLowerCase() y tpUpperCase cambian los caracteres a minuscula y mayuscula. Y si queremos un solo caracter se pone el index que es [0]=I O [1]=n

console.log('Interfaz'.toUpperCase()); // INTERFAZ
console.log('INTERFAZ'.toLowerCase()); // interfaz


//          Slice(inicio,fin):Corta desde inicio hasta fin(sin incluir fin), Esxtrae partes de un string o array

let texto = "JavaScript";
texto.slice(0, 4);       // "Java"
texto.slice(4);          // "Script" (desde el 4 hasta el final)
texto.slice(-6);         // "Script" (desde 6 antes del final)
texto.slice(1, -1);      // "avaScrip" (desde el 1 hasta el penúltimo)










