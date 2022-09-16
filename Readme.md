# API REST com Node JS - Express - Mondodb

Tecnologia:
Mongo DB: https://account.mongodb.com/account/login
NodeJS: https://nodejs.org/en/
ExpressJS: https://expressjs.com/



Criamos aqui uma API Rest para cadastrar recursos como livros, autores, usamos as boas práticas aqui de dividir os pacotes em controlador, em models, em rotas. Utilizamos os verbos HTTP para buscar corretamente os livros, cadastrar, atualizar e excluir e dessa forma fechamos o nosso CRUD, fizemos o nosso CRUD completo acessando dados diretamente no banco, fazendo a conexão com o banco MongoDB.

Para isso nós usamos o Mongoose que é uma biblioteca que faz essa conexão com o MongoDB, também criamos uma conta no DB Atlas e vimos que podemos colocar o nosso banco na nuvem, o benefício que isso tem para nós, a facilidade de simplesmente colocar a string de conexão e só inserir os documentos. Foi possível usar também o Nodemon que é uma biblioteca que faz o livereload, programamos aqui o tempo inteiro e não precisava ficar parando e subindo o servidor novamente.


Nesta aplicação foi desenvolvida uma API REST do zero, criando rotas, controladores, modelos, se conectou a aplicação a um banco de dados MongoDB em nuvem. 
Além disso, se utilizou bibliotecas consolidadas e amplamente utilizadas no desenvolvimento Web com Node, como Express e Mongoose. 
Finalizando o CRUD completo de dois recursos (livros e autores), e se criou consultas personalizadas por campo fazendo associação de dados de um recurso na rota que busca o outro recurso.

![image](https://user-images.githubusercontent.com/79227339/186975843-fa5866e8-8892-45ff-abcd-3e5830622ce0.png)
