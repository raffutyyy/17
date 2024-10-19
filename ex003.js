function montarFrase(palavras){
    let fraseFinal = ''
    for (const palavra of palavras) {
        fraseFinal += palavra + ' '

        
    }
    return fraseFinal.trim()
}
let frase = ['oi', 'sumido', 'tudo', 'bem?']
console.log(montarFrase(frase))