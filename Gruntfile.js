module.exports = function(grunt) {

  grunt.initConfig({
    traceur: {
      options: {
        includeRuntime : true
      },
      custom: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.js'],
          dest: 'dist'
        }]
      },
    },
    simplemocha : {
      all : {
        src : ['test/*.js']
      }
    }
  })

  grunt.loadNpmTasks('grunt-traceur')
  grunt.loadNpmTasks('grunt-simple-mocha')

  grunt.registerTask('default', ['traceur', 'simplemocha'])

}
