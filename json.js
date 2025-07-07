/*JavaScript proporciona métodos:

JSON.stringify para convertir objetos a JSON.
JSON.parse para convertir JSON de vuelta a un objeto.*/

//               JSON.stringify a student


let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student);

console.log(typeof json); // ¡obtenemos un string!
console.log(json)/* Objeto JSON-codificado:*/

//El método JSON.stringify(student) toma al objeto y lo convierte a un string



//              json.parse()

let texto = '{"nombre": "Ana", "edad": 25}';  // <- esto es un JSON en texto

let objeto = JSON.parse(texto);

console.log(objeto.nombre); // "Ana"
console.log(objeto.edad);   // 25








