/* eslint-env node */
const withPWA = require('next-pwa');
const { i18n } = require('./next-i18next.config');
const prod = process.env.NODE_ENV === 'production';

module.exports = withPWA({
    i18n,
    pwa: {
        disable: prod ? false : true,
        dest: 'public',
    },
});
