# Contact App

Este projeto utiliza [React native](https://github.com/facebook/react-native) e uma API em [NodeJS](https://github.com/nodejs) com [Express](https://github.com/expressjs/express) que demanda um banco de dados SQL. Neste projeto utilizei a imagem do [postgreSQL](https://github.com/docker-library/postgres) e o ORM [TypeORM](https://github.com/typeorm/typeorm).

![bgRepo](https://user-images.githubusercontent.com/54781646/113193175-0c77d000-9236-11eb-92af-79be12042bcf.png)


## Getting started

```sh
  $ git clone https://github.com/thiereslima/contact-app-react-native-nodejs.git
```

```sh
  $ cd contact-app-react-native-nodejs/backend && yarn install
    cd ../contactapp && yarn install
```

## Executando a aplicação

Acesse a pasta backend e execute o comando:

```sh
  $ yarn dev:server
```

Acesse a pasta contactapp e execute o comando:

```sh
  $ yarn start
```

Acesse novamente a pasta contactapp e execute o comando:

```sh
  $ yarn react-native run-android
```
