# The Ultimate High-Performance TypeScript Server Starter 🏎️ 
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node.js-%3E%3D%2019.6.1-brightgreen.svg)](https://nodejs.org/)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/nimatra/Fastify-Prisma-Nexus-Jest-Starter/Run%20Tests%20for%20Modified%20Files)](https://github.com/nimatra/Fastify-Prisma-Nexus-Jest-Starter/actions)
[![Test Coverage](https://img.shields.io/codecov/c/github/nimatra/Fastify-Prisma-Nexus-Jest-Starter/main)](https://codecov.io/gh/nimatra/Fastify-Prisma-Nexus-Jest-Starter)
[![GitHub Stars](https://img.shields.io/github/stars/nimatra/Fastify-Prisma-Nexus-Jest-Starter)](https://github.com/nimatra/Fastify-Prisma-Nexus-Jest-Starter/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/nimatra/Fastify-Prisma-Nexus-Jest-Starter)](https://github.com/nimatra/Fastify-Prisma-Nexus-Jest-Starter/network/members)


🚀 Welcome to the Fastify-Prisma-Nexus-GraphQL-Jest Boilerplate! 🎉

This boilerplate provides you with a solid foundation to build amazing and professional GraphQL servers using Fastify, Prisma, Nexus, GraphQL, and Jest!

## 📋 Requirements

To get started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) v19.6.1 or later 🟢
- [PostgreSQL](https://www.postgresql.org/) (for the database) 🐘
- [Yarn](https://yarnpkg.com/) (recommended) or npm 🧶
- [Docker](https://www.docker.com/) 🐳

Check the `engines` and `dependencies` sections in the `package.json` for the specific versions of required packages.

## 🛠️ Installation

Follow these simple steps to set up the project:

1. Clone the repository: `git clone https://github.com/nimatra/fastify-prisma-nexus-graphql-jest.git` 📦
2. Change to the project directory: `cd fastify-prisma-nexus-graphql-jest` 📁
3. Install dependencies: `yarn install` or `npm install` 🧩
4. Set up environment variables by creating a `.env` file in the project root, based on the provided `.env.example` file. 🔑
5. Update the `prisma/schema.prisma` file with your database connection details. 🗃️
6. Run database migrations: `yarn migrate:dev` or `npm run migrate:dev` 🚧
7. Start the development server: `yarn dev` or `npm run dev` 🚀

💡 Bonus: You can use the included Docker Compose file in `/dockers/db-compose.yml` to quickly set up a local PostgreSQL database. 🐳

Now you're ready to build your next amazing GraphQL server! Let's get started! 🎉

## 🌟 Features

This boilerplate comes packed with a variety of features to help you kickstart your GraphQL server:


### 🔐 Authentication

The project includes built-in authentication using [Fastify](https://www.fastify.io/), [Passport](http://www.passportjs.org/), and [bcryptjs](https://www.npmjs.com/package/bcryptjs). You can easily integrate your preferred authentication provider or extend the current implementation to suit your needs.

### 🗃️ Migration

Effortlessly manage your database schema using [Prisma migrations](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate). This boilerplate includes scripts for running, resetting, and deploying migrations, ensuring that your database schema remains in sync with your code.

### 🛠️ Others
- [Pino](https://getpino.io/) for logging 📝
- [Altair GraphQL Client](https://altair.sirmuel.design/) for interacting with your GraphQL API 📡
- [Swagger](https://swagger.io/) for API documentation 📚

## 🧬 Sample Schema

The boilerplate comes with a sample schema that demonstrates how to define your GraphQL types and resolvers using [Nexus](https://nexusjs.org/). This schema covers the models listed below and includes relationships between them. You can easily customize the schema to match your application's needs.

The template includes sample code for the following models:

- Users 👥
- Tasks 📋
- Comments 💬
- UserTasks 👤📋
- TaskRoles 📌

[`prisma-erd-generator`](https://github.com/AhmedElywa/prisma-erd-generator) generates an informative ERD diagram that is helpful for developer discussions. 📊

## 🌱 Seeding Data into Production 🌱

To bootstrap your production database with initial data, you can use the provided seed file located in the `prisma/seed.ts` directory. Modify it to include your desired seed data and run the `db:push` script to populate your production database. 🚀

## 🧪 Test 🧪

The boilerplate includes a comprehensive testing setup using [Jest](https://jestjs.io/) with a pre-configured `jest.config.js` file. You'll find sample tests for the included models in the `tests` directory. These tests cover various aspects of the application, such as resolvers, middleware, and utility functions. The custom configuration for Jest includes:

- TypeScript support with the `ts-jest` preset.
- A dedicated test environment, using Node.js.
- Global setup and teardown scripts for test initialization and cleanup.
- Test environment variables set to load from a separate `.env.test` file.

To run the tests, simply execute the `test` or `test:all` script. 🚦

Every test run will create a new test database and seed the `test/seed.ts` data into the database. It's recommended to use the Docker-based database. 🐳


📊 Test Coverage 📊

Keep track of your project's test coverage with Jest's built-in coverage reporting. The boilerplate is pre-configured to generate coverage reports when running the tests. You can view the coverage report in the `coverage` directory after running the tests. 📈

## 🔄 Github Action 🔄

The included Github action, named "Run Tests for Modified Files", ensures high code quality by automatically running tests for modified files in your pull requests. The action is triggered when a pull request is opened, updated, or labeled on the `main` branch.

Here's what the action does:

1. Runs on the latest Ubuntu environment.
2. Sets up a PostgreSQL 15 service with a test database and user.
3. Checks out your repository.
4. Sets up Node.js with version 19 and caches the Yarn dependencies.
5. Installs dependencies using the `yarn install --frozen-lockfile` command.
6. Gets the list of modified files in the pull request with a `.test.ts` extension.
7. Runs Jest tests only for the modified files, using the `yarn test --findRelatedTests` command.

The action makes use of environment variables to configure the test database connection. This ensures a seamless and efficient testing process for every commit to the repository. ✅

## 🤝 Contributing 🤝

We welcome contributions to this open-source boilerplate! If you have any ideas or suggestions, please feel free to open an issue or submit a pull request. We'll review your changes and work with you to ensure that this boilerplate remains a top choice for developers building Fastify GraphQL servers. 💡

📜 License 📜

This project is licensed under the MIT License. See the `LICENSE` file for more information. 📄

🙌 Acknowledgments 🙌

We'd like to thank the developers and maintainers of [Fastify](https://www.fastify.io/), [Prisma](https://www.prisma.io/), [Nexus](https://nexusjs.org/), [GraphQL](https://graphql.org/), and [Jest](https://jestjs.io/) for their excellent work on these libraries. This boilerplate wouldn't be possible without their efforts. 🎉
