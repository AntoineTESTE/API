// Animal Validation retourne les résultats de validation des méthodes


'use strict';

// export des resultats
module.exports = (Joi) => {
  const params = {
    animalId: Joi.string().uuid()
  };

  const payload = {
    name: Joi.string().required()
  };

  return {
    create: {
      payload
    },

    find: {
      params
    },

    findAll: {},

    edit: {
      params,
      payload
    },

    remove: {
      params
    }
  }
};
