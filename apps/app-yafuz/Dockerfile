FROM node:alpine AS base
RUN apk update && apk add git

## Globally install turbo
RUN npm i -g turbo

# Prune the workspace for the `app-yafuz` app
FROM base as pruner
WORKDIR /app
COPY . .
RUN turbo prune --scope=app-yafuz --scope=eslint-config-custom --docker

# Add pruned lockfile and package.json's of the pruned subworkspace
FROM base AS installer
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
# Install only the deps needed to build the target
RUN yarn install

# Copy source code of pruned subworkspace and build
FROM base as builder
WORKDIR /app
COPY --from=pruner /app/.git ./.git
COPY --from=pruner /app/out/full/ .
COPY --from=installer /app/ .
RUN turbo run build --scope=app-yafuz

# Start the app
FROM builder as runner
EXPOSE 3000
RUN ['yarn', '--cwd', 'apps/app-yafuz', 'start']