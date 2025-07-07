//              MAP

/*     Map: es igual que object. Es una coleccion de datos identificados por claves. Map permite claves de cualquier tipo

    Map:clave,valor

// Los metodos y propiedades son:


new Map() – crea el mapa.
map.set(clave, valor)) – almacena el valor asociado a la clave.
map.get(clave) – devuelve el valor de la clave. Será undefined si la clave no existe en map.
map.has(clave) – devuelve true si la clave existe en map, false si no existe.
map.delete(clave) – elimina el elemento con esa clave.
map.clear() – elimina todo del map.
map.size – tamaño, devuelve la cantidad de elementos actual.
*/

//          Iteracion sobre Map

/*map.keys() –- devuelve un iterable con las claves. Devuelve solo las claves
map.values() -– devuelve un iterable con los valores. Devuelve solo los valores
map.entries() -– devuelve pares [clave, valor].   Con for.. of map 

for (let [clave, valor] of map.entries()) {
  console.log(`${clave}: ${valor}`);
}

// Resultado:
// nombre: Ana
// edad: 30
// pais: Chile
*/





    // crea un Map vacío

/*let miMapa = new Map();  

miMapa.set('nombre', 'Ana');
miMapa.set('edad', 25);
miMapa.set(123, 'Número');


console.log(miMapa.get('nombre'));  // Ana
console.log(miMapa.get(123));       // Número


console.log(miMapa.has('edad'));  // true
console.log(miMapa.has('altura')); // false


miMapa.delete('edad');  // borra esa clave


console.log(miMapa.size);  // 2


miMapa.clear();  // ahora está vacío
*/


// OTRO EJEMPLO DE MAP

/*let mapa = new Map();

mapa.set('animal', 'Perro');
mapa.set('color', 'Rojo');
mapa.set(10, 'Número diez');

console.log(mapa.get('animal'));  // "Perro"
console.log(mapa.get(10));        // "Número diez"

console.log(mapa.size);           // 3 elementos

mapa.delete('color');             // elimina "color"
console.log(mapa.has('color'));   // false

mapa.clear();                     // elimina todo
console.log(mapa.size);           // 0
*/





//                   SET
/*   Es una coleccion de tipo especial: "conjunto de valores" (sin claves) donde cada valor puede aparecer solo una vez
Sus principales métodos son:

new Set([iterable]) – crea el set. El argumento opcional es un objeto iterable (generalmente un array) con los valores para inicializarlo.
set.add(valor) – agrega un valor, y devuelve el set en sí.
set.delete(valor) – elimina el valor, y devuelve true si el valor existía al momento de la llamada; si no, devuelve false.
set.has(valor) – devuelve true si el valor existe en el set, si no, devuelve false.
set.clear() – elimina todo el continido del set.
set.size – es la cantidad de elementos.


*/
//Ejemplo si queremos recordar a los visitantes perolas visitas no deben llevar a duplicados los visitantes deben ser contado solo una vez



let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visitas, algunos usuarios lo hacen varias veces
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set solo guarda valores únicos
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (luego Pete y Mary)
}

/*

Métodos y propiedades:

new Set([iterable]) – crea el set. El argumento opcional es un objeto iterable (por ejemplo un array) de valores para inicializarlo.
set.add(valor) – agrega un valor, devuelve el set en sí.
set.delete(valor) – elimina el valor, devuelve true si valor existe al momento de la llamada; si no, devuelve false.
set.has(valor) – devuelve true si el valor existe en el set, si no, devuelve false.
set.clear() – elimina todo del set.
set.size – es la cantidad de elementos
*/

//Tambien soporta los metodos que MAP tiene para los iteradores

//      MAP - Es una coleccion de valores con clave
//      SET - Es una coleccion de valores unicos(sin duplicados)




//                  WeakMap y WeakSet

// =======================================================================
// 📘 GUÍA: WeakMap y WeakSet en JavaScript - ¿Qué son y cuándo usarlos?
// =======================================================================

/*
🔐 ¿Qué son WeakMap y WeakSet?
---------------------------------
Son estructuras especiales de JavaScript similares a Map y Set, pero:

✅ Solo aceptan objetos (no strings, números, etc.)
✅ No impiden que los objetos se eliminen automáticamente de la memoria (garbage collection)
✅ Son útiles para asociar datos a objetos de manera temporal y privada

🚫 No se pueden iterar (no puedes usar for...of)
🚫 No tienen .size ni .clear()
🚫 No puedes ver su contenido directamente

¿Debo usarlos? 
➡️ NO en la mayoría de los casos.
➡️ SÍ solo en situaciones muy específicas (caches, datos privados, manejo avanzado de memoria).
*/

// =======================================================================
// ✅ WEAKMAP
// =======================================================================

/*
🔹 WeakMap es como un Map, pero las claves deben ser objetos.
🔹 Se usa comúnmente para guardar datos privados en clases o relacionar datos a objetos que pueden desaparecer.
*/

const datosPrivados = new WeakMap();

class Usuario {
  constructor(nombre, contraseña) {
    this.nombre = nombre;
    datosPrivados.set(this, { contraseña });
  }

  mostrarContraseña() {
    return datosPrivados.get(this).contraseña;
  }
}

let ana = new Usuario("Ana", "secreta123");

console.log(ana.mostrarContraseña()); // "secreta123"

// Si eliminamos la referencia al objeto:
ana = null;
// El WeakMap ya no retiene ese dato internamente → puede ser eliminado de la memoria automáticamente

// =======================================================================
// ✅ WEAKSET
// =======================================================================

/*
🔹 WeakSet es como un Set, pero solo puede contener objetos.
🔹 Se usa para saber si un objeto ha sido agregado, sin mantenerlo permanentemente en memoria.
*/

let procesados = new WeakSet();

function procesar(usuario) {
  if (procesados.has(usuario)) {
    console.log("Ya fue procesado.");
    return;
  }

  console.log("Procesando a:", usuario.nombre);
  procesados.add(usuario);
}

let u1 = { nombre: "Luis" };
let u2 = { nombre: "Ana" };

procesar(u1); // Procesando a: Luis
procesar(u1); // Ya fue procesado.
procesar(u2); // Procesando a: Ana

// Si u1 y u2 se eliminan o quedan sin referencia, el WeakSet también los olvida

// =======================================================================
// 🧠 RESUMEN COMPARATIVO
// =======================================================================

/*
| Característica         | WeakMap             | WeakSet             |
|------------------------|---------------------|---------------------|
| Solo objetos           | ✅                  | ✅                  |
| Evita fuga de memoria  | ✅                  | ✅                  |
| Iteración (for...of)   | ❌                  | ❌                  |
| .size y .clear()       | ❌                  | ❌                  |
| Uso común              | Datos privados      | Objetos procesados  |
| Uso real               | Bajo                | Bajo                |
*/

// =======================================================================
// 🟢 Conclusión Final:
// =======================================================================
/*
Usa Map y Set normalmente.
Usa WeakMap o WeakSet solo si sabes que necesitas:
  - Controlar memoria avanzada
  - Asociar datos sin evitar recolección de basura
  - Esconder información de forma segura y privada
*/

