// L"index de validation réceptionne le plugin JOI

'use strict';

const Joi = require('joi');

module.exports = () => {
  return {
    animals: require('./animals.validation')(Joi) // jointure du plugin et des validateurs
  };
};
