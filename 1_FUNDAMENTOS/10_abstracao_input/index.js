const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Bem vindo ao programa, digite o primeiro numero: ', (l1) => {
    rl.question('digite o seugndo numero: ',(l2)=>{
        const soma = Number(l1) + Number(l2)
        console.log(`A soma dos numeros é ${soma}`)
        rl.pause()
    })
})