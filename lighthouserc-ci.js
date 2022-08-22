module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        startServerCommand: 'yarn run start',
        // staticDistDir "./dist/ng-github-lighthouse-ci",
      },
         assert: {
            assertions: {
              'categories:performance': ['error', {minScore: .9}],
              'categories:accessibility': ['error', {minScore: .9}],
              'categories:best-practices': ['error', {minScore: .9}],
              'categories:seo': ['error', {minScore: .8}],
              'categories:pwa': 'off',
            }  
        },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };