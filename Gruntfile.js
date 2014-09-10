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
    }
  })

  grunt.loadNpmTasks('grunt-traceur')

  grunt.registerTask('default', ['traceur'])

}
