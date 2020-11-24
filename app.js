const http = require('http');

const { PORT, ENV } = require('./config');
const { log } = require('./logger');

http.createServer((req, res) => {
  res.writeHeader(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: `Hello world from ${ENV} environment!` }));
}).listen(PORT, () => log(`Listening on port ${PORT}...`));
