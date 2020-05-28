module.exports = function(grunt){

    grunt.initConfig({
           jshint: {
               all: ['javascript/**/*.js']
           },

	       concat: {
               options: {
                   separator: ';'
               },
               dist: {
                   src: ['javascript/**/*.js'],
                   dest: 'min/min.js'
               }
           },

           uglify: {
              options: {
                  mangle: false
              },
              my_target: {
                  files: {
                      'min/min.js': ['javascript/**/*.js']
                  }
              },
              compress: {
                  unused: false
              },
          },

          cssmin: {
              options: {
                  mergeIntoShorthands: false,
                  roundingPrecision: -1
              },
              target: {
                  files: {
                      'min/min.css': ['css/**/*.css']
                  }
              }
          },

          watch: {
              javascript: {
                  files: ['javascript/**/*.js'],
                  tasks: ['concat', 'uglify'],
                  options: {
                      spawn: false,
                  },
              },
              css: {
                  files: ['css/**/*.css'],
                  tasks: ['cssmin'],
                  options: {
                      spawn: false,
                  },
              },
          }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jshint','concat', 'uglify', 'cssmin']);
}
