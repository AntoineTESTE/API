'use strict';
require('./bootstrap');

// Plugins
const Hapi = require('hapi');
const Boom = require('boom');
const Good = require('good');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Joi = require('joi');
const uuid = require('uuid');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

require('./src')(server);

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
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('info', 'Server running at: ' + server.info.uri);
  });
});
