# Upload and Retrieve Image on MongoDB using Mongoose

## Dependências e tecnologias usadas:

* Mean STACK: MongoDB, Express, AngularJS e Node.
* Multer:
* Nodemon

### Informações:
- **Armazenamento de Imagem**:
- Salvar arquivos e imagens em banco de dados não é recomendado, ou salvar no Servidor da aplicação, isso acaba ocupando muito espaço, no melhor caso seria utilizar uma solução como:
    - CDN: Content Delivery Network (Amazon S2/S3) para salvar os arquivos em locais estaticos.
    - Os CDN são preparados para salvar os arquivos de forma estatica.
    - Melhor também para ter uma arquitetura mais distribuida.
- Forma de armazenamento anterior:
    - Imagem é armazenada em formato binário, portanto, precisamos convertê-la para o formato base64 que, no momento da renderização, isso no Controller (imageController).

#### TO DO:
[x] Separar as rotas:
[x] cadastrar imagem
[x] pagina inicial
[x] Ajustar Icones
[x] Editar (nome e descrição).
[x] Mudar o formulário para usar o Form do AngularJS.
[ ] Validação Formulário:
[ ] Mensagem de erro default para imagem não encontrada.
[ ] Organizar Rotas para padrão do Projeto.
[ ] Explicação Projeto.
[ ] Diferença entre salvar imagem no banco e usar um diretório.
[ ] REMOVER Imagem.
[ ] Editar Imagem.
[ ] Lazy Loading: no carregamento das imagnes.
[ ] Cropar a imagem e salvar (update).
- Se a imagem for apagada do diretorio ela nao sera exibida e tera uma mensagem de erro.
#### Instalação

[Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and start the server.
```sh

$ npm install

$ npm start

```
##### Conteúdos estudados:

*  [x] **FormData()**: criar um Objeto JS que "simula" um <form>

* [x]  **Base64**: A codificação Base-64 é uma maneira de pegar dados binários e transformá-los em texto para que sejam mais facilmente transmitidos em coisas como e-mail e dados de formulário HTML.
    - Por quê? porque algumas mídias são feitas para streaming de texto. Você nunca sabe - alguns protocolos podem interpretar seus dados binários como caracteres de controle (como um modem), ou seus dados binários podem ser confusos porque o protocolo subjacente pode pensar que você inseriu uma combinação de caracteres especial (por exemplo, como o FTP traduz uma linha terminações).

    - Então, para contornar isso, as pessoas codificam os dados binários em caracteres. Base64 é um desses tipos de codificação.
 
 * [x] **ArrayBuffer**: tipo de dado usado para representar um genérico, buffer de dados binários de tamanho fixo.
    ```java script
    // create an ArrayBuffer with a size in bytes
    const buffer =  new  ArrayBuffer(8);
    console.log(buffer.byteLength);
    // expected output: 8
    ```
* [x] **Uint8Array()**: Uint  Arrays constroem arrays não tipificados apenas com números (bytes parados). A diferença é que cada array de construtor possui um intervalo de bytes diferente na memória. Uint8Arraytem apenas 1 byte, então o limite de um número é 255. Uint16Array tem 2 bytes de comprimento, então o limite é 65535. Uint32Arraytem 4 bytes de comprimento, então o limite é 4294967295.
Ao construir um Uint * Array, você declara o comprimento do array como o primeiro argumento:

    ```java script
    var arr = new Uint8Array(1);
    ```
- Se você declarar um array / buffer / objeto, o construtor ainda os processa como um Uint*Array.
    ```java script
    var arr = new Uint8Array([10, 257]);
    console.log(arr[0]); // 10
    console.log(arr[1]); // 1 (same thing: 257 % 256)
    ```
* [x] **Mimetype**: é o mecanismo para dizer ao cliente a variedade de documentos transmitidos: a extensão de um nome de arquivo não tem significado na web. Portanto, é importante que o servidor esteja configurado corretamente, de modo que o MIME-type correto seja transmitido com cada documento. Os navegadores costumam usar o MIME-type para determinar qual ação usar como padrão para fazer quando um recurso é obtido.
- [x] **Blob** (Binary Large Object - grande objeto binário) é um campo criado para o armazenamento de qualquer tipo de informações em formato binário, dentro de uma tabela de um banco de dados.
*  **Exemplo BLOB (usando modelo relacional):**

    ```SQL
    CREATE  TABLE  COMPROMISSOS (
    ID INTEGER  NOT  NULL,
    DESCRICAO BLOB,
    DATA_HORA TIMESTAMP  NOT  NULL
    );
    ```
     
- [x]  contentType 

    - contentType:  O cabeçalho Content-Type é utilizado para indicar o tipo de arquivo do recurso.
        - Exemplo:
            - Em uma requisição POST, resultado de uma submissão de um formulário HTML, o Content-Type da requisição é especificado pelo atributo enctype do elemento <form> do HTML.
        
                ```HTML
                <form action="/" method="post" enctype="multipart/form-data">
                  <input type="text" name="description" value="some text">
                  <input type="file" name="myFile">
                  <button type="submit">Submit</button>
                </form>
                ```
                
            - A requisição vai parecer com isto (alguns headers não importantes foram omitidos):
            ```HTML
            POST /foo HTTP/1.1
            Content-Length: 68137
            Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575
            
            ---------------------------974767299852498929531610575
            Content-Disposition: form-data; name="description" 
            
            some text
            ---------------------------974767299852498929531610575
            Content-Disposition: form-data; name="myFile"; filename="foo.txt" 
            Content-Type: text/plain 
            
            (content of the uploaded file foo.txt)
            ---------------------------974767299852498929531610575
            ```


#### **Encode Form HTML**: Ao fazer uma solicitação POST, você deve codificar os dados que formam o corpo da solicitação de alguma forma.

-  **Os formulários HTML fornecem três métodos de codificação:**

    -  **application/x-www-form-urlencoded** (o padrão)
        - Recomendado para:  Representa um formulário codificado de URL. Este é o valor padrão se o enctypeatributo não estiver definido para nada.
        - as chaves e valores são codificados em tuplas de valor-chave separadas por '&', com um '='  entre a chave e o valor. 

    - **multipart/form-data**
        - Recomendado para: Representa um formulário multiparte. Este tipo de formulário é usado quando o usuário deseja fazer upload de arquivos

    - **text/plain**:
        - Recomendado para: Um novo tipo de formulário introduzido no HTML5, que como o nome sugere, simplesmente envia os dados sem qualquer codificação
        
  
###### Referência:

- https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
    - tutorial Uploud image usando NodeJS

- https://youtu.be/MkkbUfcZUZM
    - tutorial salvando imagens em CDN

- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Content-Type
    -  Content-Type


- https://dev.to/sidthesloth92/understanding-html-form-encoding-url-encoded-and-multipart-forms-3lpa
    - form-encoding
