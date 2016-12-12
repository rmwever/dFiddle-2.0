module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    var mixIn = require('mout/object/mixIn');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            options: {
                force: true
            },
            build: {
                src: ['./build/**/*']
            }
        },
        requirejs: {
            minify: {
                options: {
                    baseUrl: "app/",
                    mainConfigFile: "app/main.js",
                    dir: "./build/src",
                    // findNestedDependencies: true,
                    optimize: 'uglify2',
                    // paths: mixIn({}, {},  { "almond": "Scripts/almond-custom.js" }),
                    uglify2: {
                        compress: {
                            global_defs: {
                                DEBUG: false
                            }
                        }
                    }
                }
            }
        },
        // cssmin: {
        //     options: {
        //         roundingPrecision: -1
        //     },
        //     target: {
        //         files: [{
        //             // './build/dist/output.min.css': [
        //             //     './build/dist/output-less.css',
        //             //     './Content/eon/Dashboard.css',
        //             //     './Content/bootstrapmap.min.css',
        //             //     './Content/datatables.css',
        //             //     './Content/gridstack.css',
        //             //     './Content/toastr.css',
        //             //     './Content/typeahead/typeahead.css',
        //             //     './Content/themes/base/*.css'
        //             ]
        //         }]
        //     }
        // },
        concat: {
            options: { separator: ';\n' },
            standard: {
                src: ['./build/src/**/*.js'],
                dest: './build/dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        }
    });
    
    grunt.registerTask('default', ['clean', 'requirejs', 'concat:standard']);    
};
