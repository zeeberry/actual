module.exports = function(grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	grunt.initConfig({
		less: {

		},
		requirejs: {

		},
		watch: {

		}
	});

	grunt.registerTask('default', ['watch']);

}
