FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN rm -rf src
RUN npm prune --production
EXPOSE 3000
CMD ["npm", "start"]
