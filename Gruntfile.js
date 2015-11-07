'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  //Project tasks configuration
  grunt.initConfig({
    //Watch - This task will watch files and run tasks when files change.
    watch: {
      options: {
        nospawn: true,
        livereload: true
      },
      //Watch for index file changes and build
      livereload: {
        files: ['app/index.html', 'app/scripts/**/*.js', 'app/styles/*.css'],
        tasks: ['build']
      },
      //Watch any bower changes and inject scripts.
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
      },
    },
    //Connect Server - The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: ['.tmp', 'app']
        }
      }
    },

    //Bower installer - This installs bower_component packages into specified files.
    bowerInstall: {
      target: {
        src: ['app/**/*.html'],
        dependencies: true,
        devDependencies: false
      }
    }

  });

  //Serve task - $ grunt serve
  grunt.registerTask('serve', function(target) {
    console.log('running serve');
    grunt.task.run(['bowerInstall', 'build', 'connect:livereload', 'watch']);
  });

  //Build task - $ grunt build
  grunt.registerTask('build', 'Building the project.', function() {
    console.log('running build');
  });

  //Default task - $ grunt
  grunt.registerTask('default', ['build', 'serve']);
};
