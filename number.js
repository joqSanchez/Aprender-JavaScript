const randomNumber = Math.floor(Math.random() * 10 ) + 1;
console.log(randomNumber);


const num = 5
if(num % 2 === 0){
  console.log("Es Par ")
}else{
  console.log('es Impar')
}

        //shuffle array sirve para mezclar o desordenar aleatoriamente los elementos de un array, ejemplo: numeros, palabras, objetos. Es para mostrar elementos de forma aleatoria
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const original = [1, 2, 3, 4, 5];
const mezclado = shuffleArray(original); // para que esto funcione hay que definir el shuffle array

console.log("Original:", original);   // [1, 2, 3, 4, 5]
console.log("Mezclado:", mezclado);   // Por ejemplo: [3, 5, 1, 2, 4]

