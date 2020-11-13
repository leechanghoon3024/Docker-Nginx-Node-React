
FROM node:alpine

WORKDIR "/app"

COPY ./package.json ./
RUN apk update && apk add -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apk update && apk add install -y nodejs
RUN npm install
RUN npm install -g pm2 && npm i pm2 && npm install -g nodemon && npm install -g typescript

COPY ./ ./

CMD [ "npm", "run", "build" ]
