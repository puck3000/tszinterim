// craft.js

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('craft', function(callback) {
  runSequence(
  [
    'styles',
    'scripts',
    'images',
  ],
  [
  	'cmsAssets',
  ],
  'bs-craft',
  callback);

  	gulp.watch("dev/styles/**/*.styl", ['styles']);
  	gulp.watch("CMS_Root/craft/templates/**/*");
  	gulp.watch('dev/img/**/*', ['images']);
	gulp.watch("dev/scripts/**/*", ['scripts']);
});
