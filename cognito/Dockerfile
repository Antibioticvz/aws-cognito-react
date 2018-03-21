FROM node:8.5.0-alpine

MAINTAINER Victor Zadorozhnyy <info@ninjamate.com>

ADD package.json yarn.lock /tmp/
ADD .yarn-cache.tgz /

RUN cd /tmp && yarn
RUN mkdir -p /service && cd /service && ln -s /tmp/node_modules

COPY . /service
WORKDIR /service

ENV FORCE_COLOR=1

RUN yarn build --production

# Install `serve` to run the application.
RUN npm install -g serve

EXPOSE 3000

CMD serve -s build -p 3000