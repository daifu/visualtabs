/*global module:false*/
module.exports = function(grunt) {
	"use strict";

	var jsFiles = [
		'js/*.js',
		'js/collections/*.js',
		'js/models/*.js',
		'js/views/*.js',
		'test/*.js',
		'test/**/*.js'
	];

	// project configuration
	grunt.initConfig({
		lint: {
			files: jsFiles
		},
		requirejs: {
			compile: {
				options: {
					name: 'main',
					baseUrl: "js/",
					mainConfigFile: 'js/main.js',
					out: 'dist/compiled.js'
				}
			}
		},
		mincss: {
			compress: {
				files: {
					'dist/compiled.css': [
						'dist/application-embed.css'
					]
				}
			}
		},
		imageEmbed: {
			application: {
				src: 'css/application.css',
				dest: 'dist/application-embed.css',
				deleteAfterEncoding: false
			}
		}
	});
};