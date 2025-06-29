const carros = [
    {marca:"joqsan", modelo:"hyundai"},
    {marca:"joqsan", modelo:"escamari"},
    {marca:"joqsan", modelo:"Toyota"}
];

const modelos = carros.map(carro=>carro.modelo.toUpperCase());//si le ponemos .toLowerCase todas se ponen en minusculas
console.log(modelos)//todos los modelos se ponen de esa forma en mayusculas



const numbers = [5,2,7,10,1];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);// busca el numero mas alto


let seconds = 10;
const countdown =  setInterval(() => {
  console.log(seconds);
  seconds--;
  if(seconds < 0){
    clearInterval(countdown);
    console.log('Countdown Finished' )
  }
},1000)// este es un contador del 10 al 0 

