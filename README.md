# Foton Books

## API

- Express
- Prisma
- PostgreSQL

Primeiramente, deve-se criar um arquivo de nome `.env` dento do diretório `api` e nele colocar o conteúdo do arquivo `.env.example` substituindo **USUARIO, SENHA, HOST e PORTA** que estão em maiúsculo no arquivo, de acordo com as credenciais do seu server PostgreSQL.

Ainda dentro do diretório `api`, siga os seguintes passos:
 
- Instale as dependências do projeto:

```shell
$ yarn // ou npm install
```

- Criar o banco e rodar a migrations:

```shell
$ yarn prisma migrate dev // ou npx prisma migrate dev
```

- Iniciar api

```shell
$ yarn dev // ou npm run dev
```

A API estará rodando na porta 3333

## Web

- React.js
  
No diretório `web`, siga os seguintes passos:
 
- Instale as dependências do projeto:

```shell
$ yarn // ou npm install
```
- Iniciar aplicação web

```shell
$ yarn start // ou npm start
```

A aplicação web estará rodando na porta 3000 e acessando a porta 3333 da api nas requisições.

Caso queira alterar a porta da API, edite o arquivo `/api/src/server.ts` e na linha onde encontra-se `app.listen(3333, () => console.log('Server running on 3333'))`, substitua `3333` pela porta desejada.

Se a porta da API for alterada, deve-se editar o arquivo `/web/src/services/api.ts`, na linha onde encontra-se `baseURL: 'http://localhost:3333/'`, substitua `3333` pela porta alterada.