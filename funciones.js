

let user = "joqsan";
function showMessage() {
  let user = 'harvin'
  let message = "Hola," + user; // variable local

  console.log( message );
}

showMessage(); // Hola,harvin
console.log(user)



//funciones callback

//1
/*function avisarCuandoListo(pizza) {
  console.log("Ya llegó la pizza: " + pizza);
  console.log("Voy a calentar el horno.");
}

function comprarPizza(avisar) {
  console.log("Estoy comprando pizza...");
  avisar("Pizza de queso");
}
*/

//2


function teDejoTarea(tarea,callback){
  console.log("Tienes que hacerla")
  hacerTarea(tarea,callback)// que hace esta funcion y porque hace eso?
}

function notificarFin(tarea) {
  console.log("Terminé de: " + tarea);// eso porque se esejecuta
}

function hacerTarea(tarea, callback) {
  console.log("Estoy haciendo : " + tarea);
  callback(tarea);//donde  va eso?
}

teDejoTarea("hacer la cama", notificarFin);//

/*"hacer la cama" se pasa a teDejoTarea(tarea, callback)

teDejoTarea la pasa a hacerTarea(tarea, callback)

hacerTarea la imprime y luego llama a callback(tarea)

Eso ejecuta notificarFin("hacer la cama")

 */
/// esto servira para

/* Enviar un formulario y luego → mostrar un mensaje

🎮 Jugar un nivel y luego → mostrar “¡Nivel completado!”

📦 Pedir datos al servidor y luego → procesarlos

Todo eso usa valores + callbacks. */





            //callback es una funcion que se pasa como argumento a otra funcion y luego se ejecuta dentro de esa funcion

function mostrarProducto(nombre,precio){
  console.log("Producto:" + nombre)
  console.log("Precio:" + precio)
}

function procesarProducto(nombre,precio,callback){
  callback(nombre,precio)
}


procesarProducto("Celular", 500, mostrarProducto);