function suma(numero){
    let resultado=0;
    let contador=1
    while (contador<=numero){
        resultado=resultado+contador
        contador ++
    }

    return resultado
}

console.log(suma(4)) 
console.log(suma(10)) 
console.log(suma(15))