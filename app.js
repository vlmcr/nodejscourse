const http = require('http');
const logger = require('./logger');
const { port, env } = require('./config');

http.createServer(function (req, res) {
  res.writeHeader(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello world!' }));
}).listen(port, () => logger.log(`Listening on port ${port}, env: ${env}`));