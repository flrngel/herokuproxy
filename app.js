var http = require('http'),
    httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({target: `http://${process.env.REVERSEIP}:9999`})
proxy.listen(process.env.PORT);
proxy.on('error', function(err, req, res) {
  console.log(err);
});
