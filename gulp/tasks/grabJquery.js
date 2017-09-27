// grabJquery.js
var gulp = require('gulp');

gulp.task('grabJquery', function() {
	return gulp.src('dev/bower_components/jquery/dist/jquery.js')
		.pipe(gulp.dest('.tmp/'));
});
