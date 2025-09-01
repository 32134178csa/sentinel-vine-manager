// next-i18next.config.js
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'it'],           // your locales
  },
  localePath: path.resolve('./public/locales'),
  debug: process.env.NODE_ENV === 'development',
}