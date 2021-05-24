# step 1 - build app
FROM node:14.17.0-slim as node

WORKDIR /edm-web/

COPY package.json ./

# RUN npm i npm@latest -g
RUN npm install

COPY ./ ./

ARG env=prod

RUN npm run build
# --------------------------------
# Step 2 - expose app
FROM nginx:1.13

COPY --from=node ./edm-web/dist/edm-front /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
