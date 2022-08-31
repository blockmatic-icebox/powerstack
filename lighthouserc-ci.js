const { truncate } = require('fs')

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: 'sudo yarn run start -p 3000',
      url: ['http://localhost:3000'],
      disableDevShmUsage: true,
      maxWaitForFcp: 45000,
    },
    upload: {
      //target: 'temporary-public-storage',
      target: 'filesystem',
      output: '/tmp/artifacts',
    },
  },
}
