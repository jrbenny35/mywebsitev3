/**
 * Created by root on 10/2/15.
 */
'use strict';

module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        sass: {
            index: {
                options:{
                    style: 'expanded',
                    noCache: true
                },
                files: {
                    'public/dist/stylesheets/main.css': 'public/stylesheets/mainStyles.sass'

                }
            }
        },
        watch:{
            css: {
                files: ['**/*.scss', '**/*.sass'],
                tasks: ['sass', 'cssmin']
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/dist/stylesheets',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/dist/stylesheets',
                    ext: '.min.css'
                }]
            }
        },
        uglify :{
            options :{
                mangle: false
            },
            index:{
                files :{
                    'public/dist/javascripts/indexFinal.min.js' : 'public/dist/javascripts/indexFinal.js'
                }
            }
        },
        concat:{
            index:{
                src:[
                    'public/javascripts/app.js',
                    'public/javascripts/controllers.js',
                    'public/javascripts/filters.js',
                    'public/javascripts/custom/index.js'
                ],
                dest:'public/dist/javascripts/indexFinal.js'
            }
        }


    });
    //Load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //Grunt tasks
    grunt.registerTask('build',['sass', 'cssmin', 'concat', 'uglify']);
    grunt.registerTask('default',['build']);


};
