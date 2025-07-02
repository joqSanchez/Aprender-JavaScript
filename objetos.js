"use strict";


/*let user = {
    name:{
        nombre:"joqsan"
    },
    age: 30

    
    
};

let admin = structuredClone(user);

admin.name.nombre = "harvin";
console.log(user.name.nombre);
console.log(admin.name.nombre)
*/

//this representa el objeto que esta ejecutando la funcion en ese momento


/*const persona = {
  nombre: "Joqsan",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);//this es el objeto en este caso es "persona"
  }
};
*/
//persona.saludar();

let robot1 = {
  nombre: "Alpha",
  saludar() {//esta es una forma corta de declarar funciones dentro de un objeto en JS
    console.log("Hola, soy " + this.nombre);
  }
};

let robot2 = {
  nombre: "Beta",
  saludar: robot1.saludar
};

robot2.saludar();//this depende de quien llama la funcion, no de donde fue escrita originalmente


let auto1 = {

    marca:"Toyota",
    mostrarMarca () {
        console.log("Esta es una marca: " + this.marca)
    }

}


let auto2 = {
    marca:"Honda",
    mostrarMarca: auto1.mostrarMarca
}

auto2.mostrarMarca();
 

let persona = {
    nombre: "joqsan",
    amigos: ["eliut","francisco","Luis"],
    listarAmigos: function () {
        this.amigos.forEach((amigo) => {
            console.log("Hola soy: " + this.nombre , " y mi amigo es:" + amigo);
        });// De esta forma se usa la funcion flecha con this porque this esta siendo heredado de otra funcion


    /*listarAmigos: () => {
      for(let i = 0; i < persona.amigos.lenght; i++){
        console.log("Hola soy: " + persona.nombre , " y mi amigo es:" + persona.amigos[i]);
      }
        
    }*/
      
        
    }
}
persona.listarAmigos();


let usuario = {
  nombre: "joqsan",
  tareas: ["Limpiar la cama","Hacer la tarea","Hacer la comida"],
  mostrarTarea: function(){
    this.tareas.forEach((tarea) => {
      console.log(this.nombre,"debe: " + tarea)
    })
  }
}

usuario.mostrarTarea();



                          //EL NEW
/*cuando se quiere crear ,muchos objetos similares(usuarios,productos,autos.etc)
se puede usar el cosntructor que ayuda a crear objetos automaticamente con ciertos valores */


//haci se usa new.target por si alguien olvida poner new//detecta si se uso new o no
/*function User(name) {
  if (!new.target) {
    return new User(name); // forzamos el uso de new
  }

  this.name = name;
}
let user = User("Juan"); // Aunque no pusiste new, igual funciona
console.log(user.name);  // Juan
*/




function User(name){//crea un constructor
 
    this.name = name;//agrega una propiedad al objeto
    this.isAdmin = false;//todos los usuarios nuevos no son administrados por defecto
  
    this.saludo = function(){//agrega metodos al objeto
      console.log("Hola soy: " + this.name);
    }
}


let user2 = new User("jack");//crea un objeto nuevoo usando ese nombre
console.log(user2.name);//se usa para acceder directamente a las propiedades

let user3 = new User("joqsan");
user3.saludo();//el constructor tambien puede tener metodos(funciones dentro del objeto)



console.log(user2.isAdmin);

/* function BigUser() {
  this.name = "John";
  return { name: "Godzilla" }; // este objeto será el resultado
  //devuelve ese objeto y no this
}

console.log(new BigUser().name); // Godzilla
*/


//function Producto(nombre, precio, categoria) {//los parametros de la function son como cajas vacias donde guardan valores que se le mandan desde afuera
//usar parametros cuando se quiera datos externos
/*si queresmpos que tenga valores personalizados se usa parametros, si quieres siempre los msimos valores, no se necsesita parametros */
/*  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;

  this.mostrarInfo = function() {
    console.log("Producto:" + this.nombre);
    console.log("Precio:" + this.precio);
    console.log("Categoria:" + this.categoria);
  };
}

let p1 = new Producto("Televisor", 350, "Electrónica");
p1.mostrarInfo();
let p2 = new Producto("Celular",80,"Electronica");
p2.mostrarInfo();
*/



function Auto(marca,modelo,year){
  this.marca = marca;
  this.modelo = modelo;
  this.year = year;

  this.mostrarInfo = function() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Year: ${this.year}`);
  }

  this.esModerno = function(){
    if(this.year >= 2015){
      console.log("Es moderno")
    }else{
      console.log("Es viejo")
    }
  }
}

let compra1 = new Auto("Audi", "Chevrolet", 2014);
compra1.mostrarInfo();
compra1.esModerno();