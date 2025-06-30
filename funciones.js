

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
