FROM node:18-alpine

WORKDIR /app

COPY ui/package*.json .

RUN npm i

COPY ui .

EXPOSE 3000
CMD ["npm", "start"]