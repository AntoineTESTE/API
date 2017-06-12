// Le handler (controlleur) recoit une requete et fournit une réponse à travers des méthodes


'use strict';

// export des méthodes
module.exports = (models) => {
  return {
    findAll(request, reply) {
      models.animals.findAll((err, animals) => {
        reply(err || animals);
      });
    },

    find(request, reply) {
      models.animals.find(request.params.animalId, (err, animals) => {
        reply(err || animals);
      });
    },

    create(request, reply) {
      models.animals.create(request.payload, (err, animal) => {
        reply(err || animal);
      });
    },

    edit(request, reply) {
      models.animals.edit(request.params.animalId, request.payload, (err, animal) => {
        reply(err || animal);
      });
    },

    remove(request, reply) {
      models.animals.remove(request.params.animalId, (err) => {
        reply();
      });
    }
  }
};
