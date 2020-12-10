FROM node:12.16.1-alpine as builder

RUN apk add --update \
    git \
    gcc \
    g++ \
    python \
    make

ADD package.json /webapp/package.json
ADD package-lock.json /webapp/package-lock.json

WORKDIR /webapp

RUN yarn

COPY src /webapp/src
COPY public /webapp/public

EXPOSE 3000
HEALTHCHECK NONE
ENTRYPOINT ["yarn", "start"]