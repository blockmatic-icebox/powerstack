FROM node:14 as builder
WORKDIR /usr/src/app
COPY package.json .
COPY yarn*.lock .
RUN yarn --ignore-optional --frozen-lockfile install
COPY . .
RUN yarn build

FROM node:14-slim as runtime
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build .
COPY --from=builder /usr/src/app/node_modules ./node_modules
CMD [ "yarn", "start" ]
