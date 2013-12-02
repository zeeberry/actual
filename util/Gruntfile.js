module.exports = function(grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	grunt.initConfig({
		less: {
			dev: {
				options: {
					paths: ["../css/less"],
					sourceMap: true
				},
				files: {
					"../css/bootstrap.css": "../css/less/bootstrap.less" 
				}
			}
		},
		requirejs: {

		},
		watch: {
			less: {
				files: ["../css/less/*.less"],
				tasks: ["less:dev"]
			}
		}
	});

	grunt.registerTask('default', ['watch']);

}
