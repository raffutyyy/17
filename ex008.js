let lista = [3, 5, 6, 7, 3, 4]
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


//C) 
function parNaLista(array) {
    let numPar = []
    for (i = 0; i < lista.length; i++) {
        if (array[i] % 2 == 0) {
            numPar.push(array[i])

        }


    }

    return numPar
}
let par = parNaLista(lista)
console.log(par)

//D)
function sinalizarIndice(array) {
    let novoArray = []
    for (i = 0; i < array.length; i++) {
        novoArray.push(`O elemento do índex ${i} é ${array[i]}`)

    }

    return novoArray
}
const arrayString = sinalizarIndice(lista)
console.log(arrayString)


//E)

function MaioreMenor(array) {
    let menor = array[0];
    let maior = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    
    console.log("O menor número é:", menor);
    console.log("O maior número é:", maior);
}

MaioreMenor(lista);