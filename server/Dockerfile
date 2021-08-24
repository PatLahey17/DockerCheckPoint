FROM node:14.17.0-alpine
WORKDIR /src/server
COPY . /src/server
RUN npm install
EXPOSE 3000
CMD [ "npm", "start"]