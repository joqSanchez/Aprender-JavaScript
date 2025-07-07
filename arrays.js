const carros = [
    {marca:"joqsan", modelo:"hyundai"},
    {marca:"joqsan", modelo:"escamari"},
    {marca:"joqsan", modelo:"Toyota"}
];

const modelos = carros.map(carro=>carro.modelo.toUpperCase());//si le ponemos .toLowerCase todas se ponen en minusculas
console.log(modelos)//todos los modelos se ponen de esa forma en mayusculas


//      Un array

let letras = ['joqsan','carlos','luis'];

//letras[3] = 'harvin' De esta forma se agrega uno nuevo al array
//letras[0] = "harvin" De esta manera se remplaza un elemento del array

console.log(letras.length) //   .length  =  muestra el total de elementos en el array osea su longitud


//     pop  agrega un elemento al final y push toma un elemento desde el final

let extrae = ['manzana','uvas','peras'];

/*extrae.pop(); extrae el ultimo que es peras
console.log(extrae)

extrae.push("arandanos") lo agrega y lo pone al final
console.log(extrae)
*/


//      shift: Extrae el primer elemento del array y lo devuelve

/*extrae.shift();// Extrajo manzana que es el primero
console.log(extrae)
*/


//      unshift: Agrega el elemento al principio del array

/*extrae.unshift("sandia")
console.log(extrae)
*/



// Se puede crear un array:     new Array() es raramente usada







