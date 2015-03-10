/*!
 * grunt-mocha-client tests
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2015
 */

'use strict';

var fs = require('fs');

exports.tests = {
	build: function (test) {
		var fixtures = fs.readFileSync('./cache/index.html', 'utf8'),
			expected = fs.readFileSync('./tests/expected.html', 'utf8');

		test.equal(fixtures, expected);
		test.done();
	}
};
