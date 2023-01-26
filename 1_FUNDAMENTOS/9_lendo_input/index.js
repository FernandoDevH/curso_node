const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual o seu nome? ', (name) => {
    console.log(`Seja bem vindo ao nosso programa ${name}! É um prazer ter você por aqui =)`)
    readline.close()
} )