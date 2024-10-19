function maiorNum(numeros){
    let maior = numeros[0]
    for(let i = 0 ; i < numeros.length; i++){
        const elemento = numeros[i]
        if(elemento > maior){
            maior = elemento
        }

    }
}
const meuNum = [11,15,18,14,12,13]
const retorno = maiorNum(meuNum)
console.log(retorno)