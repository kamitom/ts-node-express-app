FROM node:latest

LABEL AUTHOR = "TOM" \
      EMAIL = "TOM@TEST.ME"

COPY src/index.js package.json /app/

WORKDIR /app

RUN npm install && npm cache clean --force

EXPOSE 8634/tcp

CMD node index.js
