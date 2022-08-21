const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
},
  compress: true,
  performance: true,
  optimizeFonts: true,
  
});
