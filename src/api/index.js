'use strict';

module.exports = (server, models) => {
  const validations = require('./validations')();
  const handlers = require('./handlers')(models);
  require('./routes')(server, validations, handlers);
};
