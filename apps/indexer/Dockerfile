FROM node:16 as builder
WORKDIR /usr/src/app
RUN yarn --ignore-optional global add typescript
COPY package.json .
COPY yarn*.lock .
RUN yarn --ignore-optional --frozen-lockfile install
COPY . .
RUN npx prisma generate
RUN yarn build

# this breaks prisma 
# FROM node:14-slim as runtime
# WORKDIR /usr/src/app
# COPY --from=builder /usr/src/app/dist .
# COPY --from=builder /usr/src/app/node_modules ./node_modules
CMD [ "node", "dist/" ]
