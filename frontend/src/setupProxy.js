const { createProxyMiddleware } = require('http-proxy-middleware');

const logLevel = "info" // debug', 'info', 'warn', 'error', 'silent']. Default: 'info'

module.exports = function (app) {
  app.use('/api/', createProxyMiddleware({
    target: 'http://localhost:8000/api/',
    logger: console,
    logLevel: logLevel,
    changeOrigin: true
  }));
};
