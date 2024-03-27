FROM node:latest

WORKDIR /

COPY . . 

RUN npm install

EXPOSE 3000

CMD [ "npm","run","dev" ]                  #start the application
