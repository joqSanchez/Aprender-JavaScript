// ========================================================
// 📘 Guía rápida: Desestructuración en JavaScript
// ========================================================

/*
🔹 ¿Qué es?
La desestructuración permite extraer valores de objetos o arrays
y asignarlos directamente a variables con menos código.
*/

// ========================================================
// 🧱 Desestructuración de OBJETOS
// ========================================================

let persona = { nombre: "Ana", edad: 25 };

// Extraer propiedades del objeto:
let { nombre, edad } = persona;
// nombre → "Ana", edad → 25

// Cambiar el nombre de las variables:
let { nombre: n } = persona;
// n → "Ana"

// Valor por defecto si la propiedad no existe:
let { ciudad = "Desconocida" } = persona;
// ciudad → "Desconocida"

// ========================================================
// 🧊 Desestructuración de ARRAYS
// ========================================================

let colores = ["rojo", "verde", "azul"];

// Extraer elementos por posición:
let [uno, dos] = colores;
// uno → "rojo", dos → "verde"

// Saltarse elementos:
let [ , , tercero] = colores;
// tercero → "azul"

// ========================================================
// 📝 Desestructuración en FUNCIONES
// ========================================================

function saludar({ nombre }) {
  console.log("Hola " + nombre);
}

saludar({ nombre: "Luis" }); // "Hola Luis"

// También funciona con arrays:
function mostrar([primero, segundo]) {
  console.log(primero, segundo);
}

mostrar(["uno", "dos"]); // "uno dos"

// ========================================================
// 🔁 Desestructuración en BUCLES
// ========================================================

let usuarios = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 31 }
];

for (let { nombre, edad } of usuarios) {
  console.log(`${nombre} tiene ${edad} años`);
}

// ========================================================
// 📦 Desestructuración ANIDADA
// ========================================================

let libro = {
  titulo: "1984",
  autor: {
    nombre: "George Orwell",
    pais: "Reino Unido"
  }
};

// Extraer propiedades anidadas:
let { autor: { nombre: autorNombre } } = libro;
// autorNombre → "George Orwell"

// ========================================================
// ✅ RESUMEN RÁPIDO
// ========================================================

/*
| Tipo                       | Ejemplo                                |
|----------------------------|----------------------------------------|
| Objeto                     | let {x, y} = objeto                    |
| Array                      | let [a, b] = array                     |
| Cambio de nombre (alias)   | let {x: nuevoNombre} = objeto         |
| Valor por defecto          | let {x = 10} = objeto                 |
| En funciones               | function f({x}) { ... }               |
| En bucles                  | for (let {x} of array) { ... }        |
| Anidado                    | let {a: {b}} = objeto                 |
*/

// ========================================================
// 🟢 Consejo final:
// ========================================================

/*
Usa la desestructuración para:
✅ Escribir menos código.
✅ Hacer el código más limpio y entendible.
✅ Extraer datos fácilmente de objetos o arrays.

Muy útil en funciones, React, APIs y estructuras de datos complejas.
*/
