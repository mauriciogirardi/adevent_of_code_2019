let fs = require('fs')

fs.readFile('./input.txt', 'UTF-8', function(erro,dados){

    if(erro){
        return console.log(erro)
    }

    let Arr = dados.split("\r\n")
    let resp = Arr.reduce((total, num) => total + Math.floor(num / 3) -2, 0)  

    console.log(resp)

})

fs.readFile('./input.txt', 'UTF-8', function(erro,dados){

    if(erro){
        return console.log(erro)
    }

    function pegarCombustivel(numero) { 

        let combustivel = Math.floor(numero / 3) - 2
        return combustivel > 0 ? combustivel + pegarCombustivel(combustivel) : 0
    }

    let Arr = dados.split("\r\n")
    let resp = Arr.reduce((total, num) => total + pegarCombustivel(num), 0)  

    console.log(resp)

})

