console.log(process.argv) 

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]

const idade = args[2].split('=')[1]

console.log(`O nome é ${nome} e tem ${idade} anos!`)


/*slice: Retorna uma cópia de uma seção de uma matriz. Para início e fim, um índice negativo pode ser usado para indicar um deslocamento do final da matriz. Por exemplo, -2 refere-se ao penúltimo elemento da matriz.
os parametros passados foram nome=Fernando nome=Thiago, idade=28 idade=29, se coloca slice.(2) pois começa a se contar do 0 e no process.argv já existem 2 arrays,que são a execução do node e a execução da pasta em que se está trabalhando.
O parametro inicial é 0 e o final é -1

na constante nome utilizamos o args[0], isso informa que queremos o primeiro elemento da array args(no exemplo o nome=fernando) o metodo .split separa o elemento de acordo com o argumento passado nas ('') que no exemplo foi o .split('=') e o que vem dentro das [] é qual elemento gostariamos que fosse utilizado da separação.*/