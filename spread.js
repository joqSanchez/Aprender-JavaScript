//          El operador spread: El operador spread expande (descompone) un array (o un objeto) en valores individuales.



let numeros = [6,2,3,4,5,6,6];

console.log(Math.min(...numeros))

//      Para qué sirve el spread?


//Pasar arrays como argumentos individuales:
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3


//Clonar arrays:
let copia1 = [...arr];



//Unir arrays
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b]; // [1, 2, 3, 4]


//Expandir objetos (muy usado en React):
let obj = { nombre: "Ana", edad: 20 };
let copia = { ...obj, ciudad: "León" };
// copia = { nombre: "Ana", edad: 20, ciudad: "León" }



//  ...spread	Expande (descompone) un array u objeto	En llamadas, arrays, objetos



















