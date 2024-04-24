FROM node:12

WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 8000

# CMD npm start
CMD [ "npm", "run" , "dev"]