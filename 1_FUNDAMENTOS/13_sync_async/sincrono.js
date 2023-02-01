const fs = require('fs')

console.log('Início')

fs.writeFileSync('arquivo.txt', 'Olá Fernando, seja bem vindo!', console.log('Arquivo criado com sucesso!'))

console.log('Fim')