'use strict';

var path = require('path');

module.exports = function (grunt) {
	grunt.initConfig({
		hapi: {
			server: {
				options: {
					noasync: true,

					server : path.resolve('utils/server.js'),
					create_options: {
						server: {
							host: 'localhost',
							port: 9000
						},

						index: 'cache/index.html'
					}
				}
			}
		},

		mochaClient: {
			test: {
				options: {
					pretty   : true,
					title    : 'Test example',
					interface: 'bdd',
					reporter : 'tests/fixtures/reporter.js',
					styles   : 'tests/fixtures/mocha.css',
					script   : 'tests/fixtures/mocha.js',
				},

				files: {
					'cache/index.html': [ 'tests/fixtures/files/**/*.js' ]
				}
			}
		},

		nodeunit: {
			tasks: ['tests/test.js']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['mochaClient:test', 'nodeunit']);
	grunt.registerTask('preview', ['test', 'hapi:server']);
	grunt.registerTask('default', ['test']);
};