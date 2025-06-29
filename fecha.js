const currentDateTime = new Date(); //crea un nuevo objeto ese Date(), representa la fecha y hora actual del sistema
console.log(currentDateTime);
console.log("Año:", currentDateTime.getFullYear());
console.log("Mes:", currentDateTime.getMonth()+1);     //ese + 1 es necesario para ver el mes tal y ha como es
console.log("Día:", currentDateTime.getDate());         
console.log("Hora:", currentDateTime.getHours());