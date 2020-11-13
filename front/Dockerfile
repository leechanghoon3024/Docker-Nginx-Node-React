FROM node:alpine as builder

WORKDIR '/app'

COPY package*.json ./
RUN apk update && apk add -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apk update && apk add install -y nodejs
RUN npm install -f
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html


