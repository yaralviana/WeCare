# WeCare - Project

<img src="src/assets/wecare.png">

## Apresentação
A API WeCare foi inspirada pelo curta-metragem [_Save Ralph_](https://www.youtube.com/watch?v=G393z8s8nFY), sobre a situação de animais que são usados como cobaia para testes. O projeto visa a criação de uma plataforma onde o usuário/consumidor pode pesquisar sobre empresas _Cruelty Free_, aquelas que não fazem uso de animais para os testes de seus produtos. O usuário poderá visualizar as empresas já cadastradas e também inserir novos dados/empresas, que ainda não se encontram na plataforma. 



<br></br>

## Sumário
=================
<!--ts-->
   * [Funcionalidades](#funcionalidades)
   * [Instalação](#instalação)
   * [Arquitetura Model View Controller](#arquitetura)
   * [Tecnologias](#tecnologias)
   * [Rotas](#rotas)
   * [Modelo com campos obrigatórios para teste: Postman ou Insomnia](#modelo-com-campos-obrigatórios-para-teste)
   * [Agradecimentos](#agradecimentos)
<!--te-->





## Funcionalidades

- Exibe marcas cadastradas
- Cadastro de novas marcas
- Atualiza dados
- Filtra por país de origem categoria. (Exemplo: Maquiagem, produtos de limpeza, produtos de higiene)
- Função de like e unlike
- Adiciona review sobre as marcas


## Instalação

## ⚙️ Como rodar o projeto
```bash
# Com o git
# Clone este repositório
$ git clone https://github.com/yaralviana/WeCare
# Acesse a pasta do projeto no terminal/cmd
$ cd wecare
# Instale as dependências
$ npm i
$ npm i mongoose
# Execute o servidor
$ npm start
# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
* Modifique `.env` para receber as variáveis de ambiente e substitua para que seu servidor funcione adequadamente

Para acessar via Heroku, acesse o [link da API](https://wecare-project.herokuapp.com/)

##

 MONGODB_URL = URL do `MongoDb Atlas` Banco de dados orientado a documentos e interface na nuvem.
    
<br>



## Arquitetura

        Arquitetura MVC
        |
        \--📂  WeCare
            |   README.md  
            |   .env
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   server.js
            \--📂 node_modules
            \--📂 assets
            \--📂src
                |
                | app.js
                |
                📂---controller
                |       brandsController.js
                |       reviewController.js
                |
                📂---database
                |       mongoConfig.js
                |                    
                📂---models                       
                |       brandsSchema.js
                |       reviewSchema.js
                |       
                |
                📂---routes
                |       brandsRoutes.js
                |       reviewRoutes.js 



## Tecnologias
- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [VScode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [modemon](https://www.npmjs.com/package/nodemon)


<br>

## Rotas

* local: http://localhost:3000

* Heroku: https://wecare-project.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para testar os endpoints da API localmente ou via Heroku

<br>


| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:3000/`     |  Mensagem de boas vindas    |             |

<br>

## Manipulação das rotas

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/brands`              | Retorna todas as marcas             | 
| GET          | `/brands/:id`          | Retorna marca por id      |
| POST         | `/brands/create`    | Cria/cadastra nova marca          |
| PUT          | `/brands/:id/update`          | Altera informações de um autor       |
| DELETE        | `/brands/:id/delete`          | Remove uma marca           |
| PATCH        | `/brands/:id/like`          | Adiciona like na marca           |
| PATCH        | `/brands/:id/unlike`          | Retira like na marca           |


## Modelo com campos obrigatórios para teste
Em construção

## Agradecimentos

Em construção