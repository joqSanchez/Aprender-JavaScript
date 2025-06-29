
// ||
let hour = 9;
let hour2 = true;
if (hour < 7 || hour2 || hour > 10 ) { //los dos son falsos pero uno es true, entonces ejecuta el primer console.log()
  console.log( 'La oficina esta cerrada.' );
}else{
  console.log('la oficina esta abierta')
}

// &&
let horas = 12;
let minutos = 17;
if(horas == 14 && minutos == 20){ // los dos son false entonces ejecuta el else
  console.log('es tarde');
}else{
  console.log('Es temprano')
}

// !
const usuario = false;

if (!usuario) {// como es false lo invierte a true
  console.log("El usuario NO ha iniciado sesión.");
} else {
  console.log("El usuario SÍ ha iniciado sesión.");
}
