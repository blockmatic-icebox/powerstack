module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        startServerCommand: 'yarn start',
        url: ['http://localhost:3000/'],
      },
      assert: {
        preset: 'lighthouse:recommended',
        assertions: {
            "categories:performace": ["error", {"minScore": 0.8}],
            "categories:accessibility": ["error", {"minScore": 0.8}],
            "categories:best-practices": ["error", {"minScore": 0.8}],
            "categories:seo": ["error", {"minScore": 0.8}],
            "apple-touch-icon": "off",
            "maskable-icon": "off",
            "installable-manifest": "off",
            "service-worker": "off",
            "splash-screen": "off",
            "themed-omnibox": "off",
        }
      },  
      upload: {
        target: 'temporary-public-storage',
      },
    },
}

