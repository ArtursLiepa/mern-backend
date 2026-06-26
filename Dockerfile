# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.14.0

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 3005

CMD ["npm", "start"]