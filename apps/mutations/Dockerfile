FROM node:19.6.1-alpine as builder
WORKDIR /usr/src/app
COPY package.json .
COPY yarn*.lock .
RUN yarn global add prisma prisma-erd-generator nexus-prisma
RUN yarn install --dev
COPY . .
RUN yarn generate
RUN yarn build

# this breaks prisma 
# FROM node:14-slim as runtime
# WORKDIR /usr/src/app
# COPY --from=builder /usr/src/app/dist .
# COPY --from=builder /usr/src/app/node_modules ./node_modules
CMD [ "node", "dist/" ]
