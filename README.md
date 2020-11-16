####
```
DOCKER  && REACT && NODE  with typesciprt 
```
####

dev?
```
docker-compose -f docker-compose.dev.yml up --build 
```
if you want background process - 

```
docker-compose -f docker-compose.dev.yml up --d

docker-compose -f docker-compose.dev.yml up --build
```

After executing the react locally, it is developed in conjunction with api.



product?

####### explain
In a production environment, the api is run at pm2, and the react is built and volume is saved and run.

```
docker-compose up -d

```

app : localhost

api : localhost/api/


