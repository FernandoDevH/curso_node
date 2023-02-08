## CORE MODULES

- 15_http modulo para criar um servidor HTTP, ou seja, receber uma requisição e enviar código HTML como resposta, por exemplo. Utilizamos alguns métodos como o createServer, para a criação do servidor e o listen para determinar a porta.

- 16_retornando_html: para tornar HTML com http iremos implementar mais recursos, adicionaremos o status code no retorno, com a propriedade statusCode, mudar os headers para text/html e retornar o html pelo método end do http