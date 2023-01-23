const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const soma = require('./soma').soma


const a = Number(args['a'])
const b = parseInt(args['b'])


soma(a, b)