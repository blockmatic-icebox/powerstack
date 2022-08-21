module.exports = {
    ci: {
      collect: {
        // staticDistDir 
        startServerCommand: 'npm run start',
        numberOfRuns: 3,
        url: ['http://localhost:3000']
      },
         assert: {
            assertions: {
              'categories:performance': ['error', {minScore: .8}],
              'categories:accessibility': ['error', {minScore: .8}],
              'categories:best-practices': ['error', {minScore: .8}],
              'categories:seo': ['error', {minScore: .8}],
              'categories:pwa': 'off',
            }  
        },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };