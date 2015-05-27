module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        uglify: {
            my_target: {
                files: {
                    'src/alertBanner.min.js': ['alertBanner.js']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'alertBanner.js']
          },
        watch: {
            // what to watch
            scripts: {
                files: ['alertBanner.js', 'Gruntfile.js'],
                tasks: ['uglify', 'jshint']
            }
        }

	});

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['watch']);
};
