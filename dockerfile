FROM node:latest
COPY . .
RUN npm i
EXPOSE 80
CMD [ "node","index.js" ]