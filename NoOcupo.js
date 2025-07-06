//              Symbols -> Crea identificadores unicos, utiles para evitar colisiones en objetos, incluso si los simbolos tienen la misma descripcion
//              Propiedades unicas, Simular propiedades privadas, cambiar comportamientos internos

/*const id = Symbol("id");

const persona = {
  nombre: "Joqsan",
  [id]: 123 // clave única
};

console.log(persona[id]); // 123
*/


//  Agregar propiedades Ocultas  : NO aparecen en un for in asi que son como privadas

/*const secreto = Symbol("secreto");

const usuario = {
  nombre: "Luis",
  [secreto]: "123abc"
};

for (let clave in usuario) {
  console.log(clave); // Solo muestra 'nombre', no 'secreto'
}
*/



//JavaScript tiene símbolos especiales para cambiar el comportamiento interno de objetos. Ejemplos:

/*Symbol.iterator → permite hacer que un objeto sea iterable con for...of.
Symbol.toPrimitive → personaliza cómo se convierte el objeto a string o número.
Symbol.toStringTag → define lo que devuelve Object.prototype.toString.

const obj = {
  [Symbol.toPrimitive](hint) {
    return hint === "number" ? 42 : "Hola";
  }
};

console.log(+obj);     // 42
console.log(`${obj}`); // "Hola"
*/



//          Conversión de objeto a valor primitivo

/*Usando Symbol.toPrimitive

const obj1 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return "Texto";
    if (hint === "number") return 10;
    return "Por defecto";
  }
};

console.log(String(obj1)); // 👉 "Texto"        (hint = "string")
console.log(+obj1);        // 👉 10             (hint = "number")
console.log(obj1 + "!");   // 👉 "Por defecto!" (hint = "default")
*/

/*Usando valueOf()
const obj2 = {
  valueOf() {
    return 100;
  }
};

console.log(+obj2);      // 👉 100 (espera número, usa valueOf)
console.log(obj2 + 1);   // 👉 101

*/

/*Usando toString()
const obj3 = {
  toString() {
    return "Hola mundo";
  }
};

console.log(String(obj3));  // 👉 "Hola mundo"
console.log(obj3 + "!");    // 👉 "Hola mundo!"

*/

//      REGLA FINAL (memorizable): de Conversión de objeto a valor primitivo
/*Situación	Método que usa JS
Symbol.toPrimitive existe	Se usa ese
Si se espera un número	valueOf() → luego toString() si falla
Si se espera un string	toString() → luego valueOf() si falla
Si se espera "default"	valueOf() o toString() según el motor JS
*/




