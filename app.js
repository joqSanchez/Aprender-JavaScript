

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

