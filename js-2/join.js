function join(arreglo) {
    let resultado = "";
    for (let i = 0; i < arreglo.length; i++) {
        resultado = resultado + " " + arreglo[i];
    }
    return resultado;
}
console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "It", "Real"]));
console.log(join([]));