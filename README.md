## Project Description
- MAC OS
- node 10
- npm
- express.js
- sequelize.js - ORM

## Structure
- mvc: routes/controllers, services, models

## Tools
- eslint
- swagger
- docker 
- Jest for testing

## Environments
# development (local)
- brew install mysql
- brew services mysql start
- setup mysql user with name `root` and password `helloworld`
- go to source code root directory, run `npm install`
- npm run db:setup
- npm run start:dev
- goto chrome: http://localhost:3000 it will redirect to swagger page
- goto chrome: http://localhost:3000/v1/registrations it will return json back 

# test
- npm run test

# production (docker)
- install docker and setup docker user, start docker app
- run `docker-compose up`
- goto chrome: http://localhost:3000 it will redirect to swagger page
- goto chrome: http://localhost:3000/v1/registrations it will return `{registrations: null}` 
- `docker ps` to check `node-mysql-app` container ID 
- `docker exec -it ${containerId} /bin/bash`
- npm run db:setup && exit 
- goto chrome: http://localhost:3000/v1/registrations it will return json back

## Future improvements
- password security, using `.env` and AWS parameters store
- middlewares: better error handler
- cache: using redis or memcached to cache response 
- CI/CD: integration with Jenkins or Circle CI
