FROM node:16-alpine as base

WORKDIR /var/app

# ---------- PRE-REQS ----------
FROM base as prereq

COPY package*.json ./

RUN npm set audit false && \
    npm set fund false && \
    npm set update-notifier false

# NOTE: only required for some projects (the below npm command will fail if this is required)
RUN apk add --no-cache git

RUN npm ci --quiet --only=production

# ---------- DEVELOPMENT ----------
FROM prereq as development

COPY tsconfig.json ./

RUN npm install --quiet

# ie. /secret
ARG PUBLIC_URL='/'
ENV PUBLIC_URL="$PUBLIC_URL"
ENV WDS_SOCKET_PATH="$PUBLIC_URL"

ENV PORT=80

CMD ["npm", "run", "debug"]

EXPOSE 80

# ---------- BUILD ----------
FROM development as build

COPY src ./src
COPY public ./public

RUN npm run build

# ---------- PRODUCTION ----------
FROM nginx:1-alpine as production

WORKDIR /var/www

COPY --from=build /var/app/build ./
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
