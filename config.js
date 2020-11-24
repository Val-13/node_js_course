const CLI_ARGS = require('./helpers').getCliArguments();

const DEFAULT_PORT = 8080;
const DEFAULT_ENV = 'prod';

module.exports = {
  PORT: process.env.PORT || DEFAULT_PORT,
  ENV: CLI_ARGS['env'] || DEFAULT_ENV
};
