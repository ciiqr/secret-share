FROM node:14-alpine as base

WORKDIR /var/app

# ---------- PRE-REQS ----------
FROM base as prereq

COPY package*.json ./

RUN npm install --quiet --unsafe-perm --no-progress --no-audit --only=production

# ---------- DEVELOPMENT ----------
FROM prereq as development

COPY tsconfig.json ./

RUN npm install --quiet --unsafe-perm --no-progress --no-audit --only=development

# ie. /secret/
ARG REACT_APP_BASE_HREF='/'
ENV REACT_APP_BASE_HREF="$REACT_APP_BASE_HREF"

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
