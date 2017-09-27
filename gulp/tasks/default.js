var gulp = require('gulp');

// default Task
gulp.task('default',['styles', 'compile-twig', 'browser-sync', 'scripts', 'images'], function () {
	gulp.watch("dev/styles/**/*.styl", ['styles']);
	gulp.watch("dev/img/**/*", ['images']);
	gulp.watch("dev/twig/**/*", ['compile-twig']);
	gulp.watch("dev/scripts/**/*", ['scripts']);

});
