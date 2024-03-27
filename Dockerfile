FROM node:latest

WORKDIR /

COPY . . 

RUN npm install
RUN npx prisma generate

EXPOSE 3000

CMD [ "npm","run","dev" ]                  #start the application
