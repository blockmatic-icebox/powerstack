module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
    },
  },
}
