// modèle ANIMAL contenant les méthodes spécifiques à ce qui est traié



'use strict';

const uuid = require('uuid');
let animals = [{
  "id": "6416ffb6-e0eb-4f7d-8517-aa7f01cbb79a",
  "name": "chat"
}, {
  "id": "1462deba-ce90-4ccd-b13c-c16576c28294",
  "name": "chien"
}, {
  "id": "1e74adb2-9ef4-4fd9-9f7c-bf590bc78afd",
  "name": "cheval"
}, {
  "id": "13765b81-be06-4a0f-a8bc-9b68196f4779",
  "name": "rat"
}, {
  "id": "942c1622-3947-474f-b249-3b64856a1b11",
  "name": "souris"
}


];


// Exportation des méthodes
module.exports = () => {
  return {
    findAll(f) {
      f(null, animals);
    },

    find(id, f) {
      const animal = _.find(animals, { 
        id
      });
      f(null, animal);
    },

    create(payload, f) {
      const animal = {
        id: uuid.v4(),
        name: payload.name
      };
      animals.push(animal);
      f(null, animal);
    },

    edit(id, payload, f) {
      animals = animals.map(animal => {
        return id == animal.id ? { id, name: payload.name } : animal;
      });
      return f(null, payload);
    },

    remove(id, f) {
      animals = _.without(animals, _.find(animals, {
        id
      }));
      f(null);
    }
  };
};
