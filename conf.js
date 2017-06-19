var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    },
    beforeLaunch: () => {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },
    afterLaunch: (exitCode) => {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};