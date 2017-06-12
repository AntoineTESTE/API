// L'index SRC recoit le serveur et l'index modèle
// il fait la jointure et exporte le tout


'use strict';

module.exports = (server) => { // export serveur/modèles
  const models = require('./models')(); // require du modèle
  require('./api')(server, models); // require du serveur associé au modèle
};
