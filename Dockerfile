FROM node:18.17-alpine

WORKDIR /app

COPY . .

RUN npm i

CMD ["node", "consumer.js"]