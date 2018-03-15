FROM node:8.5.0-alpine

MAINTAINER Victor Zadorozhnyy <info@ninjamate.com>

WORKDIR /opt/app

# Install yarn
RUN mkdir -p /opt
ADD latest.tar.gz /opt/
RUN mv /opt/dist /opt/yarn
ENV PATH "$PATH:/opt/yarn/bin"

ADD package.json yarn.lock /tmp/

# Copy cache contents (if any) from local machine
ADD .yarn-cache.tgz /

# Install packages
RUN cd /tmp && yarn
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# Copy the code
ADD . /opt/app

RUN yarn build --production

# Install `serve` to run the application.
RUN npm install -g serve

EXPOSE 3000

CMD serve -s build -p 3000