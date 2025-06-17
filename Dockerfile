FROM node:22.16.0-alpine3.21 AS dependencies

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm ci 


FROM node:22.16.0-alpine3.21 AS builder

WORKDIR /usr/src/app 

COPY --from=dependencies /usr/src/app/node_modules ./node_modules

COPY . .

RUN npm run build 

ENV NODE_ENV=production

RUN npm ci --only=production && npm cache clean --force



FROM node:22.16.0-alpine3.21 AS production

WORKDIR /usr/src/app

COPY --from=builder --chown=node:node /usr/src/app/dist ./dist

COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules

EXPOSE 3000

USER node

CMD ["node", "dist/main"]