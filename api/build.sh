#!/bin/bash

touch yarn.lock

# Init empty cache file
if [ ! -f .yarn-cache.tgz ]; then
  echo "Init empty .yarn-cache.tgz"
  tar cvzf .yarn-cache.tgz --files-from /dev/null
fi

docker build . -t api
docker tag api:latest 079659954133.dkr.ecr.us-east-1.amazonaws.com/api:latest

docker run --rm --entrypoint cat api:latest /tmp/yarn.lock > /tmp/yarn.lock
if ! diff -q yarn.lock /tmp/yarn.lock > /dev/null  2>&1; then
  echo "Saving Yarn cache"
  docker run --rm --entrypoint tar api:latest czf - /root/.yarn-cache/ > .yarn-cache.tgz
  echo "Saving yarn.lock"
  cp /tmp/yarn.lock yarn.lock
fi

docker push 079659954133.dkr.ecr.us-east-1.amazonaws.com/api:latest