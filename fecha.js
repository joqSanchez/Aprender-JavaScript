const currentDateTime = new Date(); //crea un nuevo objeto ese Date(), representa la fecha y hora actual del sistema
console.log(currentDateTime);
console.log("Año:", currentDateTime.getFullYear());
console.log("Mes:", currentDateTime.getMonth()+1);     //ese + 1 es necesario para ver el mes tal y ha como es
console.log("Día:", currentDateTime.getDate());         
console.log("Hora:", currentDateTime.getHours());



let Dec31_1969 = new Date(24 * 3600 * 1000);
console.log( Dec31_1969 );


/*getHours(), getMinutes(), getSeconds(), getMilliseconds()
Devuelve los componentes del horario correspondientes. */


/*let mes = ['enero','febrero','marzo','abril','mayo','junio','julio']


let segundos = new Date();

let horaMes = mes[segundos.getMonth()]

console.log(horaMes)
*/

let hora = new Date()
let segundos =  new Date()

console.log(hora.getHours() + ":" + segundos.getSeconds()) // De esta manera se puede poner mes,segundos,horas,year en una sola linea

let dia = new Date()
let Mes = new Date()
let year = new Date()

console.log(dia.getDate() + ":" + Mes.getMonth() + ":" + year.getFullYear())



let todo = new Date("2017-02-06")
console.log(todo);



function pasarFecha(fecha){
    let year = fecha.getFullYear();
    let mes = fecha.getMonth()+1
    let dia = fecha.getDate()

    return `${year}-${mes}-${dia}`
}

let hoy = new Date;
console.log(pasarFecha(hoy))











