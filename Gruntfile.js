'use strict';
module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/bootstrap-material-design/dist/js/material.js',
        'node_modules/bootstrap-material-design/dist/js/ripples.js',
        'assets/js/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    copy: {
      main: {
        files: [
          {
          expand: true, flatten: true,
          src: [
            'node_modules/bootstrap/dist/css/*.min.css',
            'node_modules/bootstrap/dist/css/*.map',
            'node_modules/bootstrap-material-design/dist/css/*.min.css',
            'node_modules/bootstrap-material-design/dist/css/*.map'
          ], 
          dest: 'assets/css/', filter: 'isFile' 
          },
        ],
      },
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/bootstrap-material-design/dist/js/material.js',
            'node_modules/bootstrap-material-design/dist/js/ripples.js',
            'assets/js/*.js',
            '!assets/js/scripts.min.js'
          ]
        }
      }
    },
    watch: {
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['uglify', 'copy']
      }
    },
    clean: {
      dist: [
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'copy',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};