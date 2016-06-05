var http = require('http'),
    httpProxy = require('http-proxy');
httpProxy.createProxyServer({target:'http://59.5.181.247:9999'}).listen(process.env.PORT);
