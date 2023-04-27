const { createProxyMiddleaware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/api', createProxyMiddleaware({
						target: 'http://localhost:8000',
						changeOrigin: 'true',
						rewrite: path => path.replace('api/', '')
					}))
}