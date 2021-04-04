FROM node:14.16.0 AS builder
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY ormconfig*.js ./
COPY ./src ./src
RUN npm ci && npm run build

FROM node:14.16.0
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
COPY ormconfig*.js ./
RUN npm ci --only=production
COPY --from=builder /app/build ./src