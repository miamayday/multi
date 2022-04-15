# Docker Guide

## Database

```
docker run --name database -d \
-e POSTGRES_USER=postgres \
-e POSTGRES_DB=chat \
-e POSTGRES_PASSWORD=password \
-p 5432:5432 \
postgres
```

Connect to the database.

```
docker exec -it database psql -U postgres -d chat
```

## Server

```
docker build . -t server
docker run --name server -it --rm \
-e PGHOST \
-p 3000:3000 \
server
```

## Client

```
docker build . -t client
docker run --name client -it --rm \
-e SERVER_URL \
-p 8080:8080 \
client
```
