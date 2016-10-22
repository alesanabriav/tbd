FROM node:6.9
#install yarn
RUN apt-key adv --keyserver pgp.mit.edu --recv D101F7899D41F3C3
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn
#install pm2
RUN npm install pm2 -g

RUN mkdir -p /var/wwww/app

WORKDIR /var/wwww/app

ADD . /var/wwww/app

RUN yarn

EXPOSE 4040

CMD pm2 start index.js -i max --no-daemon
