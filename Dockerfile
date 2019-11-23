FROM node:latest

COPY src/index.js package.json /app/

WORKDIR /app

RUN npm install && npm cache clean --force

CMD node index.js
