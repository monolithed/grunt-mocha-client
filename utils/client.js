'use strict';

var path  = require('path'),
	fs    = require('fs');

module.exports = {
	mocha: function (user_file, ext) {
		var file = user_file;

		if (!user_file) {
			var mocha = require.resolve('mocha');

			var dir = path.dirname(mocha);
			file = path.join(dir, 'mocha.' + ext);
		}

		return fs.readFileSync(file);
	}
};
