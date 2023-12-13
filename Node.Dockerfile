FROM node:21-alpine

COPY . /index

WORKDIR /index

RUN npm install

CMD ["npm", "start"]
