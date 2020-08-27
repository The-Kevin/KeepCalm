# API KEEPCALM

## descrição do projeto

<h2 align="center">Este é um projeto pessoal com intuito de mostrar um pouco do meu trabalho!</h2>

<p align="center">
    API criada para anotações, acionaremos a um pequeno banco de dados o nome de quem criou a anotação, a anotação em si e o dia que foi adicionada aquela anotação
    cada anotação tem um ID único que é incrementado automaticamente assim que a postagem foi inserida no banco de dados!
</p>

<p align="center">
    <a href="#inicio">Inicio</a>
    <a href="#dependencias">Dependencias</a>
    <a href="#instalação">Instalação</a>
    <a href="#autor">Autor</a>
</p>

<h4 align="center"> 
	🚧  Sempre em construção...  🚧
</h4>

# Inicio

<p align="center">
    Esta API foi inicialmente criada para ser consumida por outras 2 aplicação, uma WEB e outra Mobile
    ambas poderão ser adquiridas e acessadas neste mesmo perfil do GitHub.
    Novas features poderão ser adicionadas posteriormente, deixo em aberto para qualquer pessoa possa modificá-lo com pull-request!
</p>

# dependencias

<p align="center">
    Para executar esta aplicação você precisará ter instalado em sua maquina as seguintes dependências

    Git ^2.20
    NPM ^6.14.6
    Typescript ^4.0.2
    Ts-node ^9.0.0
    Cors ^2.8.5
    Sqlite3 ^5.0.0
    Express ^4.17.1
    Knex ^0.21.5

</p>

# instalação

# Clone este repositorio
$ git clone https://github.com/The-Kevin/KeepCalm

# Acesse a pasta do projeto no terminal/cmd

$ cd KeepCalm

<p>é necessário ter todas as dependências instaladas para prosseguir</p>

# execute a migration 

$ npm knex:migrate

<p>
    Um novo arquivo será criado em seu repositorio
    Caso ocorra algum erro, verifique se o sqlite esta devidamente instalado em seu computador!
</p>

# execute o servidor

$ npm start

# O servidor iniciará na porta:8080 - acesse <http://localhost:8080></http:>


# autor 

<h2 align="center">
    API criada por Kevin Almeida em um dia de tedio :)
</h2>
