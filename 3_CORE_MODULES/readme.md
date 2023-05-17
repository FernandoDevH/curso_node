## CORE MODULES

- 15_http modulo para criar um servidor HTTP, ou seja, receber uma requisição e enviar código HTML como resposta, por exemplo. Utilizamos alguns métodos como o createServer, para a criação do servidor e o listen para determinar a porta.

- 16_retornando_html: para tornar HTML com http iremos implementar mais recursos, adicionaremos o status code no retorno, com a propriedade statusCode, mudar os headers para text/html e retornar o html pelo método end do http

- 17_url: o módulo url serve para decompor uma URL que passamos para o método parse. Podemos resgatar: host, path, search, query, etc. A partir destas informações conseguimos alterar a lógica do nosso código.

- 18_http_url: com o http criamos nosso server e alteramos a resposta baseado na URL acessada. Com o URL processamos os parâmetros que vem pela query string, para alterar a lógica do http.

- 19_fs: o módulo fs(File System) serve para trabalhar com arquivos e diretórios, ele também é um Core Module. Podemos ler e escrever em arquivos, por exemplo. Uma utilização interessante é o logs do sistema .

- 20_escrevendo_arquivos: Além de criar arquivos, podemos também escrever, utilizando o método writeFile. Esta escrita pode estar associada a um conjunto de operações como o envio de informações de um usuário, por exemplo.