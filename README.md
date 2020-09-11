# Upload and Retrieve Image on MongoDB using Mongoose
## Dependências e tecnologias usadas:

* Mean STACK:  MongoDB, Express, AngularJS e Node.
* Multer:

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
    [ ] Explicação Projeto
    [ ] Mensagem de erro default para imagem não encontrada.
    [ ] Organizar Rotas para padrão do Projeto.
    [ ] REMOVER Imagem.
    [ ] Editar Imagem.
    [ ] Lazy Loading:  no carregamento das imagnes.
    [ ] Cropar a imagem e salvar (update).

    - Se a imagem for apagada do diretorio ela nao sera exibida e tera uma mensagem de erro.
### Instalação

 [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ node start
```

#### Referência: 
- https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/