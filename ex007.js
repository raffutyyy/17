let numPet = Number(prompt('quantos bichinhos de estimação você tem?'))

function controlePet(){
    if(numPet > 0){
        let array = []
       for (let i = 0; i < numPet; i++) {
        let nome = prompt('digite o nome do seu pet:')
        array.push(nome)
        console.log(array)
        
       }
    }else{
        console.log('Que pena! Você pode adotar um pet!')
    }
    
}
controlePet()