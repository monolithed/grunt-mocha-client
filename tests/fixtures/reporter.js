var runner = mocha.run();

var results = {
	passed: 0,
	failed: 0
};

runner.on('pass', function (test) {
	results.passed++;
});

runner.on('fail', function (test, error) {
	results.failed++;
});

runner.on('end', function() {
	results.stats = runner.stats;
});
