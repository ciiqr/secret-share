FROM node:14-alpine as base

WORKDIR /var/app

# ---------- PRE-REQS ----------
FROM base as prereq

COPY package*.json ./

RUN npm set audit false && \
    npm set fund false

RUN npm ci --quiet --only=production

# ---------- DEVELOPMENT ----------
FROM prereq as development

COPY tsconfig.json jest.config.js ./

RUN npm install --quiet --only=development

CMD ["npm", "run", "debug"]

EXPOSE 80
EXPOSE 9229

# ---------- BUILD ----------
FROM development as build

COPY src ./src

RUN npm run build

# ---------- PRODUCTION ----------
FROM prereq as production

COPY --from=build /var/app/build ./build

CMD ["npm", "start"]

EXPOSE 80
