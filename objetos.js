"use strict"; //si hay un error eso ensena en consola cual es desde donde

//          structuredClone(user//el nombre de el objeto que se quiere copiar y guardar sus alores antes de modificarlos); con esa sitaxis se clona el user y se mantiene para cuando se modifique no se borren los datos anteriores antes de su modificacion
/*let user = {
    name:{
      nombre:"joqsan"
    },
    age: 30
};

let admin = structuredClone(user);
admin.name.nombre = "harvin";//se da el nuevo valor a nombre

console.log(user.name.nombre); // se imprime el valor antes de su modificacion
console.log(admin.name.nombre) // se imprime el nuevo valor
*/

//              this representa el objeto que esta ejecutando la funcion en ese momento

/*const persona = {
  nombre: "Joqsan",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);//this es el objeto en este caso es "persona"
  }
};

//persona.saludar();
*/

//            De esta forma se puede llamar un valor de una funcion de otro objeto y llamarla y usar esos valores dentro de otro objeto. funcion de objeto: llamar valor de obejto a otro objeto

/*let robot1 = {
  nombre: "Alpha",
  saludar() {//esta es una forma corta de declarar funciones dentro de un objeto en JS
    console.log("Hola, soy " + this.nombre);
  }
};

let robot2 = {
  nombre: "Beta",
  saludar: robot1.saludar //primero el nombre del objeto y despues el valor que queremos utilizar en este caso una funcion saludar
};

robot2.saludar();//this depende de quien llama la funcion, no de donde fue escrita originalmente
*/

//             Este es un ejemplo con la funcion de objeto Nombre: llamar valor de objeto a otro objeto

/*let auto1 = {

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
*/


//            This = en la primera forma se usa forEach y funcion flecha para usar this se uso un function  para que this se herede en la funcion flecha          


/*let persona = {
  nombre: "joqsan",
  amigos: ["eliut", "francisco", "Luis"],
  listarAmigos: function () {
    this.amigos.forEach((amigo) => { //this se heredo medinte el function y  forEach accedio al array dentro de amigos, y para recorrerlos se uso la funcion flecha (amigo) => {}

      console.log("Hola soy: " + this.nombre, " y mi amigo es:" + amigo); //Aca ya con el this heredado en la funcion fecha desde el function su usa this y se usa el nuevo nombre modificado que es el de amigos: A amigo que lo cambio el forEach para poder guardar esos nombre de los amigos y usarlos
    
    }); // De esta forma se usa la funcion flecha con this porque this esta siendo heredado de otra funcion




      //segunda Forma

    listarAmigos: () => { // usamos una funcion flecha
      for(let i = 0; i < persona.amigos.lenght; i++){ y el bucle for para recorrer todos los elementos del array y en cad vuelta muestra un mensaje con el nombre de la persona y el nombre del amigo actual
        console.log("Hola soy: " + persona.nombre , " y mi amigo es:" + persona.amigos[i]);
      }
        
    }
  },
};

persona.listarAmigos();
*/




//              Este es un ejemplo usanfo forEach y this eredado a funcion flecha y que recorre un array y lo emprime con el vallor de un propiedad "nombre:"

/*let usuario = {
  nombre: "joqsan",
  tareas: ["Limpiar la cama", "Hacer la tarea", "Hacer la comida"],
  mostrarTarea: function () {
    this.tareas.forEach((tarea) => {
      console.log(this.nombre, "debe: " + tarea);
    });
  },
};

usuario.mostrarTarea();
*/



//          EL NEW = cuando se quiere crear ,muchos objetos similares(usuarios,productos,autos.etc),se puede usar el constructor que ayuda a crear objetos automaticamente con ciertos valores

//          haci se usa new.target por si alguien olvida poner new // new.target: detecta si se uso new o no y de esa forma se le crea uno para saber si se uso 

/*function User(name) {
  if (!new.target) {
    return new User(name); // forzamos el uso de new
  }

  this.name = name;
}
let user = User("Juan"); // Aunque no pusiste new, igual funciona
console.log(user.name);  // Juan
*/




//  Esta es una funcion constructora (funcion + objetos) para usar el NEW

/*function User(name) {
  //crea un constructor

  this(User).name = name; //agrega una propiedad al objeto
  this(User).isAdmin = false; //todos los usuarios nuevos no son administrados por defecto


  // Esta esta con user3
  
  this(User).saludo = function () {    //agrega metodos al objeto
    console.log("Hola soy: " + this.name);
  };
}

let user2 = new User("jack"); //crea un objeto nuevo usando ese nombre       let user2 (una variable que va a tener un nuevo nombre de usuario)  new(la crea) User(el nombre de la funcion constructora)  ("jack") el nombre del nuevo usuario
console.log(user2(variable que tiene el nuevo nombre de usuario en User).name(name propieda de User)); //para acceder directamente a las propiedades


let user3 = new User("joqsan"); //otra variable con un nuevo nombre de usuario
user3.saludo(este contiene this.name) (); //el constructor tambien puede tener metodos(funciones dentro de la funcion objeto)

console.log(user2.isAdmin); // pone la variable user2  + la propieda: let user2 ya contiene La funcion contructora User
*/




//          Retorno de funciones constructoras
/* function BigUser() {
  this.name = "John";
  return { name: "Godzilla" }; // este objeto será el resultado
  //devuelve ese objeto y no this
}

console.log(new BigUser().name); // Godzilla
*/





//    los parametros de la function son como cajas vacias donde guardan valores que se le mandan desde afuera. Usar parametros cuando se quiera datos externos. Si queresmpos que tenga valores personalizados se usa parametros, si quieres siempre los msimos valores, no se necsesita parametros
//    Esta es una funcion constructora con parametros al que cada una se les da un valor segun a como esten organizados en la funcion

/*function Producto(nombre, precio, categoria) {
  this.nombre = nombre;
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



//  Este es un ejemplo de funcion con parametros que verifica si el modelo del crro es viejo o moderno

/*function Auto(marca, modelo, year) {
  this.marca = marca;
  this.modelo = modelo;
  this.year = year;

  this.mostrarInfo = function () {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Year: ${this.year}`);
  };

  this.esModerno = function () {
    if (this.year >= 2015) {
      console.log("Es moderno");
    } else {
      console.log("Es viejo");
    }
  };
}
*/


//                              Encadenamiento "?" se usa antes de acceder a algo que no podria existir console.log(nuevo?.trabajo)

/*let compra1 = new Auto("Audi", "Chevrolet", 2014);
compra1.mostrarInfo();
compra1.esModerno();

let nuevo = {
  name: "joqsan"
}

console.log(nuevo?.trabajo)
*/





