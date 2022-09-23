/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['ui', 'core']);
const path = require("path");

module.exports = withTM({
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
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
