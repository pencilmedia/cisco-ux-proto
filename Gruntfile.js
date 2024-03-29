module.exports = function (grunt) {
	'use strict';
	

	var stylelintConfig = {
		"rules": {
			"block-no-empty": true,
			"color-no-invalid-hex": true,
			"declaration-colon-space-after": "always",
			"declaration-colon-space-before": "never",
			"function-comma-space-after": "always",
			"function-url-quotes": "double",
			"media-feature-colon-space-after": "always",
			"media-feature-colon-space-before": "never",
			"media-feature-name-no-vendor-prefix": true,
			"max-empty-lines": 5,
			"number-leading-zero": "never",
			"number-no-trailing-zeros": true,
			"property-no-vendor-prefix": true,
			"rule-no-duplicate-properties": true,
			"declaration-block-no-single-line": true,
			"rule-trailing-semicolon": "always",
			"selector-list-comma-space-before": "never",
			"selector-list-comma-newline-after": "always",
			"selector-no-id": true,
			"string-quotes": "double",
			"value-no-vendor-prefix": true
		}
	}

	const sass = require('node-sass');
	grunt.initConfig({
		includereplace: {
			your_target: {
				options: {
					// Task-specific options go here.
					globals: {
						// GLOBAL VARIABLES
						appTitle: 'Network Insights - Resources',
						titleDashboard: 'Dashboard'
					}
				},
				// Files to perform replacements and includes with
				src: '**/*.html',
				// Destination directory to copy files to
				dest: 'dist/'
			}
		},
		copy: {
			main: {
				files: [{
					src: '**/*',
					dest: 'dist/'
				}]
			},
			assets: {
				files: [{
					expand: true,
					cwd: 'assets/',
					src: ['**', '!styles/**', '!scss/**'],
					dest: 'dist/assets/'
				}],
			},
			bower_components: {
				files: [{
					expand: true,
					cwd: 'bower_components/',
					src: ['**'],
					dest: 'dist/assets/vendor/'
				}],
			},
			node_modules: {
				files: [{
					expand: true,
					cwd: 'node_modules/',
					src: ['**'],
					dest: 'dist/assets/vendor/'
				}],
			}
		},

		watch: {
			options: {
				livereload: true
			},
			tpl: {
				files: ['**/*.tpl'],
				tasks: ['includereplace']
			},
			html: {
				files: ['*.html'],
				tasks: ['copy:main']
			},
			sass: {
				files: ['**/*.scss'],
				tasks: ['sass', 'cssmin']
			},
			assets: {
				files: ['assets/**'],
				tasks: ['copy:assets', 'imagemin:assets']
			},
			bower_components: {
				files: ['bower_components/**'],
				tasks: ['copy:bower_components']
			}
		},

		sass: {
			options: {
				implementation: sass,
				sourceMap: true,
				quiet: true // stop depreciation errors
			},
			dist: {
				files: {
					'dist/assets/css/main.css': 'assets/scss/main.scss'
				}
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'dist/assets/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/assets/css',
					ext: '.min.css'
				}]
			}
		},

		imagemin: {
			assets: {
				files: [{
					expand: true,
					cwd: 'dist/assets/images',
					src: ['**/*.{png,jpg,gif,svg, ico}'],
					dest: 'dist/assets/images'
				}]
			}
		},

		clean: {
			release: ["dist"]
		},

		connect: {
			server: {
				options: {
					port: 8000,
					base: 'dist',
					hostname: 'localhost',
					livereload: true
				}
			}
		},

		npmcopy: {
			dist: {
				options: {
					destPrefix: 'dist/assets'
				},
				files: {
					// 'js/jquery.slim.min.js': 'node_modules/jquery/dist/jquery.slim.min.js',
					'js/fastclick.js': 'node_modules/fastclick/lib/fastclick.js'
				}
			}
		},

		postcss: {
			options: {
				processors: [
					require('stylelint')(stylelintConfig)
				]
			},
			dist: {
				src: 'assets/scss/*.scss'
			}
		},

		html5validate: {
			src: 'dist/*.html'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-npmcopy');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-include-replace');

	grunt.registerTask('build', ['copy', 'includereplace', 'sass', 'cssmin', 'imagemin', 'npmcopy']);
	grunt.registerTask('default', ['clean', 'build', 'connect', 'watch']);
};