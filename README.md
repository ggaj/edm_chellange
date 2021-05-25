## Eldorado Device Management - EDM

This project was built as part of a challenge. Below we can find the deliverables and how to execute them.

- [**edm-back folder**](/edm-back) - the code for an API server
- [**edm-front folder**](/edm-front) - the code for a client-side

Our System is available at:

- [EDM Web](https://edm-chellange.azurewebsites.net)
- [EDM API](https://edm-api-chellange.azurewebsites.net/api)

## Requirements

Please, make sure you have the following installed

- Docker
- Docker Compose

You can use this command to check:

```
$ docker -v && docker-compose -v
```

---

## Stack

- Database - Mysql
- Backend - Nodejs
- Frontend - Angular

---

## How to use

```
$ git clone https://github.com/ggaj/edm_chellange.git
```

```
$ cd edm-chellange/
```

Now, build and start all containers with:

```
$ docker-compose up --build
```

**IMPORTANT**: Once configured, it is necessary to manually create the database schema, with name **edm**

## How to test

```
$ cd edm-back && npm run test
```
