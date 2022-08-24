module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        startServerCommand: 'yarn build',
        //  staticDistDir "./pages/",
        url: ['http://localhost:3001'],
      },
         assert: {
          preset: "lighthouse:recommended",
            assertions: {
              'categories:performance': ['error', {minScore: .9}],
              'categories:accessibility': ['error', {minScore: .9}],
              'categories:best-practices': ['error', {minScore: .9}],
              'categories:seo': ['error', {minScore: .9}],
              'categories:pwa': 'off',
            }  
        },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };