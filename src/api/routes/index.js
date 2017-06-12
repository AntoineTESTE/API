// L'index Routes contient les require de toutes les routes 


'use strict';

module.exports = (server, validations, handlers) => { // export 
  require('./animals.routes')(server, validations, handlers); // require des routes ANIMALS et jointure avec le serveur/ l'index de validations et l'index des handlers
};
