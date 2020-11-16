
FROM node:alpine

WORKDIR "/app"

COPY ./package.json ./

RUN npm install
RUN npm install -g pm2 && npm i pm2 && npm install -g nodemon && npm install -g typescript

COPY ./ ./

CMD [ "npm", "run", "build" ]
