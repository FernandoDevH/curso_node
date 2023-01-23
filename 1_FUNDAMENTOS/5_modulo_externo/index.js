const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)
const nome = args['nome']
const sobrenome = args['sobrenome']
console.log(`Bem vindo ${nome.slice(-1)} soares da  ${sobrenome.slice(-1)}`)