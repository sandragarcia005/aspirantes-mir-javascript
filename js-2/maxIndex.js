function maxIndex(arreglo) {
    if (arreglo.length === 0) {
        return -1;
    }
    let resultado = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > arreglo[resultado]) {
            resultado = i;
        }
    }
    return resultado;
}
console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]))