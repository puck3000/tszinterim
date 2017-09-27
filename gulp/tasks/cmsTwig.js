// cmsTwig.js
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;


gulp.task('cmsTwig', function () {
	return	gulp.src('dev/twig/**/*')
		.pipe(gulp.dest('CMS_Root/craft/templates/'))
		.pipe(reload({stream:true}));
});
