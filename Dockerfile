FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install -g pnpm

RUN pnpm install --production --silent
# RUN mv node_modules ../

COPY . .

EXPOSE 9701

RUN pnpm run build

RUN chown -R node /usr/src/app

USER node

CMD ["npm", "start"]
