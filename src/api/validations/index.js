'use strict';

const Joi = require('joi');

module.exports = () => {
  return {
    animals: require('./animals.validation')(Joi)
  };
};
