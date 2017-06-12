'use strict';

module.exports = (models) => {
  return {
    animals: require('./animals.handlers')(models)
  };
};
