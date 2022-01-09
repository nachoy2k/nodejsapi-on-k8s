FROM node:alpine

RUN addgroup -S nodegroup && adduser -S nodeuser -s /bin/bash -h /home/nodeuser -G nodegroup

RUN mkdir -p /usr/src/app
RUN chown -R nodeuser /usr/src

USER nodeuser

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

EXPOSE 3000

CMD [ "npm", "start" ]