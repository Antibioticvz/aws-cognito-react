FROM node:8.9.4-alpine

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

RUN yarn build

EXPOSE 5000
CMD ["node", "dist/index.js"]
