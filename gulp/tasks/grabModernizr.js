// grabModernizr
var gulp = require('gulp');

gulp.task('grabModernizr', function() {
	return gulp.src('dev/bower_components/modernizr/modernizr.js')
	  .pipe(gulp.dest('.tmp/'));
});
