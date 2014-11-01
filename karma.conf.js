// Karma configuration
// Generated on Fri Oct 31 2014 23:19:37 GMT+0530 (India Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/svg-pan-zoom/dist/svg-pan-zoom.js',
            'demo/script/app.js',
            'src/*.js',
            'test/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.ts': ['typescript'],
            'src/*.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        typescriptPreprocessor: {
            // options passed to the typescript compiler
            options: {
                sourceMap: false, // (optional) Generates corresponding .map file.
                target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
                module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd'
                noImplicitAny: false, // (optional) Warn on expressions and declarations with an implied 'any' type.
                noResolve: true, // (optional) Skip resolution and preprocessing.
                removeComments: true // (optional) Do not emit comments to output.
            },
            // transforming the filenames
            transformPath: function (path) {
                console.log(path);
                return path.replace(/\.ts$/, '.js');
            }
        },

        coverageReporter: {
            reporters: [
                {type: 'lcov', dir: 'test/coverage/'},
                {type: 'text-summary', dir: 'test/coverage/'}
            ]
        },

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-typescript-preprocessor'
        ]
    });
};
