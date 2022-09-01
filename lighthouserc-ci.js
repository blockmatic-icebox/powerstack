const { truncate } = require('fs')

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: 'yarn start -p 3000',
      url: ['http://localhost:3000/'],
      //   settings: {
      //     // Don't run certain audits
      //     skipAudits: ['redirects-http'],
      //     // Don't clear localStorage/IndexedDB/etc before loading the page.
      //     disableStorageReset: true,
      //     // Wait up to 90s for the page to load
      //     maxWaitForLoad: 90000,
      //     // Use applied throttling instead of simulated throttling
      //     throttlingMethod: 'devtools',
      //     disableDevShmUsage: true,
      //     maxWaitForFcp: 45000,
      //   },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
