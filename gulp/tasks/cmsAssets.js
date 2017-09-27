// cmsAsssets.js

// cmsTwig.js
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('cmsAssets', function () {
	return	gulp.src('dist/assets/**/*')
		.pipe(gulp.dest('CMS_Root/assets/theme'))
		.pipe(reload({stream:true}));
});
