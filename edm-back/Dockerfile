FROM node:14-alpine

WORKDIR /edm-api/

COPY package*.json ormconfig.js .env  ./
COPY dist ./dist

RUN npm install prod

CMD [ "npm", "run", "start" ]