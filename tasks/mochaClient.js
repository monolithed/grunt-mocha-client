/*!
 * grunt-mocha-client
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2015
 */

'use strict';

var path = require('path'),
	fs   = require('fs'),
	jade = require('jade');

var client = require('../utils/client');

module.exports = function (grunt) {
	grunt.registerMultiTask('mochaClient', 'Grunt task for run mocha test suite in browser', function () {
		var options = this.options({
			pretty   : true,
			title    : 'Test Runner',
			interface: 'bdd'
		});

		options.script = client.mocha(options.script, 'js');
		options.styles = client.mocha(options.styles, 'css');

		var tests = [];

		this.files.forEach(function (files) {
			files.src.forEach(function (name) {
				var file = null;

				try {
					file = path.resolve(name);
				}
				catch (error) {
					grunt.log.fail('[Path resolving]\n - %s', error);
				}

				if (!grunt.file.isFile(file)) {
					return 0;
				}

				try {
					tests.push(fs.readFileSync(file));
				}
				catch (error) {
					grunt.log.fail('[Test file reading]\n - %s', error);
				}
			});

			if (options.reporter) {
				try {
					var file = path.resolve(options.reporter);
					options.reporter = fs.readFileSync(file);
				}
				catch (error) {
					grunt.log.fail('[Reporter file reading]\n - %s', error);
				}
			}

			options.tests = tests.join('\n');

			var output = jade.renderFile('views/index.jade', options);

			grunt.file.write(files.dest, output);
			grunt.log.oklns('File "' + files.dest + '" created.');
		});
	});
};
