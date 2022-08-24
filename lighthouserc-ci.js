module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        startServerCommand: 'yarn start',
        //  staticDistDir "./pages/",
        url: ['http://localhost:3000/'],
      },
         assert: {
          preset: "lighthouse:recommended",
            assertions: {
              'categories:performance': ['error', {minScore: .9}],
              'categories:accessibility': ['error', {minScore: .9}],
              'categories:best-practices': ['error', {minScore: .9}],
              'categories:seo': ['error', {minScore: .9}],
              'categories:pwa': 'off',
              'apple-touch-icon': 'off',
            },  
        },
        upload: {
          target: 'temporary-public-storage',
      },
    },
  };