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

Connect to the database:

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

Multi-arch support:

```
docker buildx build --platform linux/amd64,linux/arm64 \
-t <DOCKER_HUB_USER>/chat-server:latest --push .
```

## Client

```
docker build . -t client
docker run --name client -it --rm \
-e SERVER_URL \
-p 8080:8080 \
client
```

Multi-arch support:

```
docker buildx build --platform linux/amd64,linux/arm64 \
-t <DOCKER_HUB_USER>/chat-client:latest --push .
```

# Kubernetes Guide

## Database

```
kubectl apply -f database.yaml
```

Connect to the database:

```
kubectl exec -it <DATABASE_POD> -- psql -U postgres -d chat
```

## Server

```
kubectl apply -f server.yaml
```

## Client

Set the SERVER_URL environment variable in the YAML manifest.

```
kubectl apply -f client.yaml
```
