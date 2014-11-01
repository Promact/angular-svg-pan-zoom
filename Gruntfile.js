module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['src/*.ts', 'test/*.ts', 'demo/script/*.ts'],
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    basePath: 'src',
                    sourceMap: false,
                    declaration: false,
                    noResolve: false
                }
            }
        },
        uglify: {
            production: {
                options: {
                    mangle: true
                },
                files: {
                    'dist/angular-svg-pan-zoom.min.js': 'dist/angular-svg-pan-zoom.js'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    // Load the plugin that provides the "Typescript" task.
    //grunt.loadNpmTasks('grunt-typescript');
    //grunt.loadNpmTasks('grunt-ng-annotate');
    //grunt.loadNpmTasks('grunt-tslint');
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['typescript', 'uglify', 'karma:unit']);

};