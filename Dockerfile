# TODO: I want to have one dockerfile for both local & prod

FROM node:12-alpine as base

WORKDIR /var/build

#---------- PRE-REQS ----------
FROM base as prereq

COPY package*.json ./
COPY client/package*.json client/ts*.json client/
COPY server/package*.json server/ts*.json server/

RUN npm install --quiet --unsafe-perm --no-progress --no-audit --only=production

#---------- DEVELOPMENT ----------
FROM prereq as development

RUN npm install --quiet --unsafe-perm --no-progress --no-audit --only=development

## All files will be volume mounted into the container

#---------- PRODUCTION ----------
FROM prereq as production

# TODO: server: compiled files & node
# TODO: client: compiled files & nginx

# TODO: can we simply copy files from a builder step into the base image
    # something like this, but typescript: https://codefresh.io/docker-tutorial/node_docker_multistage/
# TODO: do we want? ENV NODE_ENV=production
# TODO: CMD ["npm", "start"]

EXPOSE 4200
EXPOSE 8100
EXPOSE 9229
