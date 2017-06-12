'use strict';

module.exports = (server, validations, handlers) => {
  require('./animals.routes')(server, validations, handlers);
};
