FROM node:10
WORKDIR /nodejs-express
COPY package.json /nodejs-express
RUN npm install
COPY . /nodejs-express
CMD ["npm","start"]