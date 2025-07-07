//          El parametro Rest es un forma de recojer varios argumentos en una sola variable como arrays
//      Se escribe con tres ... puntos y va al final de los parametros de una funcion


//Sirve cuando no se sabe cuantos argumentos recibira una funcion
//Solo debe haber un solo parametro rest y debe ir al final
// los ... en parametros. Recoge todos los argumentos en un array

//  varios objetos como argumentos separados    (...param)

//      Imagina que quieres hacer una función que sume todos los números que le mandes:

function sumar(...numeros) {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumar(5, 10));         // 15
console.log(sumar(1, 2, 3, 4));// No importa cuantos numeros se pongan. Todos se capturan en numeros gracias a ...    // 10


function miFuncion(a, ...resto) {
  console.log("a:", a);
  console.log("resto:", resto);
}

miFuncion(10/*a*/, 20, 30, 40); // si es un objeto solo se puede usar una {} y este objeto entra como un solo elemento en el array


//      Cuando se va a recibir varios objetos como argumentos:

function procesarUsuarios(...usuarios) {
  for (let u of usuarios) {
    console.log(u.name);
  }
}

procesarUsuarios(
  { name: "Joqsan" },
  { name: "Luis" },
  { name: "Ana" }
);



//  ...rest	Agrupa en un array	En la definición de funciones






