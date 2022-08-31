module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'yarn start',
      url: ['http://localhost:3000/'],
    },
    upload: {
      //target: 'temporary-public-storage',
      target: '/tmp/artifacts',
    },
  },
}
