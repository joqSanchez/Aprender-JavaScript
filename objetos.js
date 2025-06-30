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
