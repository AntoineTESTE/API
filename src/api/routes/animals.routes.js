// ROUTING Animals contient les routes spécifiques pour le modèle animal


'use strict';


// Export des Routes

module.exports = (server, validations, handlers) => {
  //Add the route to create an array of animals
  server.route({
    method: 'POST',
    path: '/animals',
    config: {
      description: '/animals',
      notes: ['api'],
      tags: ['api'],
      handler: handlers.animals.create,
      validate: validations.animals.create
    }
  });

  //Add the route to modify an animal
  server.route({
    method: 'PUT',
    path: '/animals/{animalId}',
    config: {
      description: '/Modify/{animalName}',
      notes: ['api'],
      tags: ['api'],
      handler: handlers.animals.edit,
      validate: validations.animals.edit
    }
  });

  //Add the route to delete
  server.route({
    method: 'DELETE',
    path: '/animals/{animalId}',
    config: {
      description: '/Delete/animalName',
      notes: ['api'],
      tags: ['api'],
      handler: handlers.animals.remove,
      validate: validations.animals.remove
    }
  });

  //Add the route to read all elements from the animal array
  server.route({
    method: 'GET',
    path: '/animals',
    config: {
      description: '/Read',
      notes: ['api'],
      tags: ['api'],
      handler: handlers.animals.findAll,
      validate: validations.animals.findAll
    }
  });

  //Add the route to read one element from the animal array
  server.route({
    method: 'GET',
    path: '/animals/{animalId}',
    config: {
      description: '/Read/animalName',
      notes: ['api'],
      tags: ['api'],
      handler: handlers.animals.find,
      validate: validations.animals.find
    }
  });
};
