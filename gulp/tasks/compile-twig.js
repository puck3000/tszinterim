var gulp = require('gulp');
var twig = require('gulp-twig');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Compile Twig
gulp.task('compile-twig', function() {
    return gulp.src('dev/twig/**/*')
      	.pipe(twig())
     	.pipe(gulp.dest('dist/'))
    	.pipe(reload({stream:true}));
});
