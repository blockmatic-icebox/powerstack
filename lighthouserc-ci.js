const { truncate } = require('fs')

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'yarn start -p 3000',
      url: ['http://localhost:3000/'],
    },
    upload: {
      target: 'filesystem',
    },
  },
}
