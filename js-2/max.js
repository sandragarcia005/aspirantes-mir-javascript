function max(arreglo) {
    let resultado = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > resultado) {
            resultado = arreglo[i];
        }
    }
    return resultado;
}
console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));