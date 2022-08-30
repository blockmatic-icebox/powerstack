FROM node:16 as builder
WORKDIR /usr/src/app
COPY package.json .
COPY yarn*.lock .
RUN yarn --ignore-optional --frozen-lockfile install
COPY . .
RUN yarn build

FROM node:16-slim as runtime
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
CMD [ "yarn", "start" ]
