var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');

// concat & minify imported css
gulp.task('minifyCSS', function() {
    gulp.src('dev/styles/cssImports/*')
    .pipe(concatCss("allCssImports.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dev/styles/'))
});
