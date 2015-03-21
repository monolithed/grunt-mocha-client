# grunt-mocha-client

[![npm version badge](https://img.shields.io/npm/v/grunt-mocha-client.svg)](https://www.npmjs.org/package/grunt-mocha-client)
[![Build Status](https://travis-ci.org/monolithed/grunt-mocha-client.png)](https://travis-ci.org/monolithed/grunt-mocha-client)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


> Grunt task for run mocha test suite in browser


## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mocha-client --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mocha-client');
```

## grunt-mocha-client task
_Run this task with the `grunt mocha-client` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### pretty
Type: `Boolean`
Default: `true`

#### title
Type: `String`
Default: `Test Runner`

#### interface
Type: `String`
Default: `bdd`

#### reporter
Type: `String`
Default: `null`

Path to the reporter file (see `tests/fixtures/reporter.js`)


### Usage Example

```js
module.exports = function (grunt) {
	grunt.config.init({
		mochaClient: {
			test: {
				files: {
					'output.html': [ 'tests/**/*.js' ]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-mocha-client');
	grunt.registerTask('default', ['mochaClient']);
};

```


### Preview

```
grunt preview
```


### Tests

```
grunt test
```


### Contributors

```
cp cache/index.js tests/expected.html
```


### Links
[Mocha](http://mochajs.org/)


Task submitted by [Alexander Abashkin](https://github.com/monolithed)
