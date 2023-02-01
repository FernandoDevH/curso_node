const fs = require('fs')

console.log('Início')

fs.writeFile('arquivo.txt', 'Seja bem vindo Fernando!', function (err) {
    setTimeout(function () {
        console.log('Arquivo criado com sucesso!')
    }, 2000)
})

console.log('Fim')