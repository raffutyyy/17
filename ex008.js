let lista = [3, 5, 6, 7, 3]
//A)
function imprimeLista(array) {
    for (i = 0; i < lista.length; i++) {
        console.log(array[i])

    }
}
imprimeLista(lista)
//B)
function divideLista(array) {
    for (i = 0; i < lista.length; i++) {
        console.log(array[i] / 10)

    }
}
divideLista(lista)


//C) - refazer
function parNaLista(array) {
    let numPar = []
    for (i = 0; i < lista.length; i++) {
        if (array[i] % 2 == 0) {
            numPar.push(array[i])
        
        }

     return numPar
    }
    let par = parNaLista(lista)
    console.log(par)
}
parNaLista(lista)

