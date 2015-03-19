var restify = require('restify');
var config  = require('config');
var fs      = require('fs')

var randomInt = (max) => Math.floor(Math.random() * max);

var server = restify.createServer();

server.use(restify.gzipResponse());

server.get('/avatar.gif', ((req, res, next) => {
  res.header('Content-Type', 'image/gif');
  res.header('Spin', 'true');

  fs.createReadStream('./public/avatar_' + randomInt(36) + '.gif')
    .pipe(res);

  return next();
}));

server.get(/^\/.*/, restify.serveStatic({
  directory: './public/',
  default: 'index.html'
}));

server.listen(config.get('port'));
