const carros = [
    {marca:"joqsan", modelo:"hyundai"},
    {marca:"joqsan", modelo:"escamari"},
    {marca:"joqsan", modelo:"Toyota"}
];

const modelos = carros.map(carro=>carro.modelo.toUpperCase());//si le ponemos .toLowerCase todas se ponen en minusculas
console.log(modelos)//todos los modelos se ponen de esa forma en mayusculas

