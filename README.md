# Upload and Retrieve Image on MongoDB using Mongoose
## Dependências e tecnologias usadas:

* Mean STACK:  MongoDB, Express, AngularJS e Node.
* Multer:
* Nodemon

### Informações:
- Armazenamento de Imagem atual: 

- Forma de armazenamento anterior:
    - Imagem é armazenada em formato binário, portanto, precisamos convertê-la para o formato base64 que, no momento da renderização, isso no Controller (imageController).

#### TO DO:

- Separar as rotas:
    [x] cadastrar imagem
    [x] pagina inicial 
    [x] Ajustar Icones
    [x] Editar (nome e descrição).
    [x] Mudar o formulário para usar o Form do AngularJS.
    [ ] Ajustar Time Zone nome Image.
    [ ] Date Java Scritp para o nome e com Time Zone Correto.
    [ ] Explicação Projeto.
    [ ] Diferença entre salvar imagem no banco e usar um diretório.
    [ ] Mensagem de erro default para imagem não encontrada.
    [ ] Organizar Rotas para padrão do Projeto.
    [ ] REMOVER Imagem.
    [ ] Editar Imagem.
    [ ] Lazy Loading:  no carregamento das imagnes.
    [ ] Cropar a imagem e salvar (update).

    - Se a imagem for apagada do diretorio ela nao sera exibida e tera uma mensagem de erro.
#### Instalação

 [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ node start
```


##### Explicação do Projeto:

- FormData(): criar um Objeto JS que "simula" um <form>
- Armazenamento de Image:
    - 
- Base64:
- Buffer:
- Blob: [x]
- Multer:
- Validação Formulário:
- Uint8Array():

###### Referência: 
- https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
    - tutorial Uploud image usando NodeJS
- https://youtu.be/MkkbUfcZUZM
    -- link referencia envio de arquivos estatico para CDN
- 
    -- Uploud Imagem usando AngulasJS


- Exemplo BLOB:

CREATE TABLE COMPROMISSOS (
  ID         INTEGER NOT NULL,
  DESCRICAO  BLOB,
  DATA_HORA  TIMESTAMP NOT NULL
);
--  blob (Binary Large Object - grande objeto binário) é um campo criado para o armazenamento de qualquer tipo de informações em formato binário, dentro de uma tabela de um banco de dados.


-> Salvar arquivos e imagens em banco de dados não é recomendado,  ou salvar no Servidor da aplicação, isso acaba ocupando muito espaço, no melhor caso seria utilizar uma solução como: 
-   CDN: Content Delivery Network (Amazon S2/S3) para salvar os arquivos em locais estaticos.
-   Os CDN são preparados para salvar os arquivos de forma estatica.
-  Melhor também para ter uma arquitetura mais distribuida.

Exmplicação Encode Form HTML: Ao fazer uma solicitação POST, você deve codificar os dados que formam o corpo da solicitação de alguma forma.
- Os formulários HTML fornecem três métodos de codificação.
    - application/x-www-form-urlencoded (o padrão)
    - multipart/form-data
    - text/plain