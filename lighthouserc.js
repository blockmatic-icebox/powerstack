module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        url: ['http://localhost:3000'],
        startServerCommand: 'yarn start',
      },
      assert: {
        preset: 'lighthouse:recommended',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };