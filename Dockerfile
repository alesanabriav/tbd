FROM node:6.9
#install yarn and pm2
RUN apt-key adv --keyserver pgp.mit.edu --recv D101F7899D41F3C3
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn
# RUN npm install pm2 -g

RUN mkdir -p /var/www

WORKDIR /var/www

ADD package.json /var/www

ADD yarn.lock /var/www

RUN yarn install

ADD . /var/www

EXPOSE 4040

# CMD pm2 start index.js -i max --no-daemon
