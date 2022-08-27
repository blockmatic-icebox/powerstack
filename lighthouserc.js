 module.exports = {
    ci: {
      collect: {
        numberOfRuns: 1,
        url: ['http://localhost:3000'],
        startServerCommand: 'yarn start',
      },
      assert: {
        preset:  "lighthouse:no-pwa",
            assertions: {
              'categories:performance': ['error', {minScore: .9}],
              'categories:accessibility': ['error', {minScore: .9}],
              'categories:best-practices': ['error', {minScore: .9}],
              'categories:seo': ['error', {minScore: .9}],
              'categories:pwa': 'off',
            }, 
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };