// L'index Handler recoit TOUS les handlers et sont associés aux modèles


'use strict';

// export des méthodes des handlers
module.exports = (models) => {
  return {
    animals: require('./animals.handlers')(models) // jointure du handler au modèle
  };
};
