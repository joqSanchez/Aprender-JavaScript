let user = {
    name:{
        nombre:"joqsan"
    },
    age: 30

    
    
};

let admin = structuredClone(user);

admin.name.nombre = "harvin";
console.log(user.name.nombre);
console.log(admin.name.nombre)

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
