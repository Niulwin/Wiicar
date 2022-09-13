/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['ui', 'core']);

module.exports = withTM({
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  compiler: {
    styledComponents: true
  },
  env: {
    API_URL: process.env.API_URL
  }
});
