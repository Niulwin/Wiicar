# Wiicar Project

Wiicar is a project made with turborepo, next, react, and other libraries

## How to run?

Clone wiicar repo

```
git clone https://github.com/Niulwin/Wiicar.git
```

Navigate to root folder

```
cd wiicar
```

### Develop

Run project

```
yarn run dev or yarn --cwd apps/app-wiicar dev
```

### Docker

Build docker

```
docker-compose build
```

Run Docker

```
docker-compose up -d
```

### Build

Build project

```
yarn run build
```

### Env File

the .env file is needed in the root from app-wiicar

```
NEXT_PUBLIC_API_URL=http://localhost:3081/api/
```

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `Wiicar`: a [Next.js](https://nextjs.org) app
- `core`: a stub React component library shared between applications
- `ui`: a stub React component library shared between applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
