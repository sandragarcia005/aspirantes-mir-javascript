let persona = {
    nombre: "sandra",
    edad: 33,
    ciudad: "cali",
    prefesion: "ingeniero",
}
console.log(persona);
function presentacion(p) {
    return p.nombre + ", " + p.edad + " ," + p.ciudad;
}
let mensaje = presentacion(persona);
console.log(mensaje);
persona.hobbies = ["comer", "dormir", "ejercicio"];
console.log(persona.hobbies);
for (i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}