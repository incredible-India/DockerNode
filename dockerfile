FROM node:latest
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 80
CMD [ "node","index.js" ]