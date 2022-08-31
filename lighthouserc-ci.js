module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: 'sudo yarn run start -p 8080',
      url: ['http://localhost:8080'],
    },
    upload: {
      //target: 'temporary-public-storage',
      target: 'filesystem',
      output: '/tmp/artifacts',
    },
  },
}
