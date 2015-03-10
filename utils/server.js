/**
 * utils/server
 */

'use strict';

var Hapi = require('hapi');

module.exports = function (options) {
	var server = new Hapi.Server;

	server.connection(options.server);

	server.route([
		{
			method : 'GET',
			path   : '/',
			handler: function (request, reply) {
				reply.file(options.index);
			}
		}
	]);

	server.start(function () {
		console.log('Server running at:', server.info.uri);
	});

	return server;
};
