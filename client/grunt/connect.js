module.exports = {
  server: {
    options: {
      hostname: 'localhost',
      port: 9000,
      keepalive: true,
      livereload: true,
      path: './',
      //open: true,
      middleware: function (connect, options) {
        return [
          require('grunt-connect-proxy/lib/utils').proxyRequest,
          connect.static(options.path),
          connect.directory(options.path)
        ];
      }
    },
    proxies: [
      {
        context: '/convert',
        host: 'localhost',
        port: 8080
      }

    ]
  }
};