module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        startServerCommand: 'yarn build && start',
        url: ['http://localhost:3000/'],
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
