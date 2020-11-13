
FROM node:alpine

WORKDIR "/app"

COPY ./package.json ./
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm install
RUN npm install -g pm2 && npm i pm2 && npm install -g nodemon && npm install -g typescript

COPY ./ ./

CMD [ "npm", "run", "build" ]
