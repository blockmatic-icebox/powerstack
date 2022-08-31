module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      //startServerCommand: 'yarn run start-server-lighthouse',
      url: ['http://localhost:3000'],
    },
    upload: {
      //target: 'temporary-public-storage',
      target: 'filesystem',
      output: '/tmp/artifacts',
    },
  },
}
