module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: './tests/setup.ts',
  globalTeardown: './tests/teardown.ts', // Add this line
  globals: {
    'process.env.PRISMA_DOTENV_PATH': '.env.test',
  },
}
