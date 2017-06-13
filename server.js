// Le serveur contient les méthodes de connexion et les require des plugins du projet



'use strict';


require('./bootstrap'); // require librairie globale



// require des Plugins
const Hapi = require('hapi');
const Boom = require('boom');
const Good = require('good');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Joi = require('joi');
const uuid = require('uuid');



// Connexion au serveur
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true
    }
  }
});


// Jointure des sources / serveur
require('./src')(server);



// Enregistrement du serveur auprès de Swagger
server.register([
  Inert,
  Vision, {
    'register': HapiSwagger,
    'options': {
      info: {
        'title': 'Test API Documentation',
        'version': '1',
      }
    }
  }
], (err) => {
  server.start((err) => { // si plantage serveur => erreur
    if (err) {
      throw err;
    }
    console.log('info', 'Server running at: ' + server.info.uri);
  });
});
