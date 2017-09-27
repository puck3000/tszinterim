var gulp        = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('plugScripts', function() {
    return gulp.src('dev/scripts/plugins.js')
     .pipe(uglify())
     .pipe(gulp.dest('dist/assets/theme/scripts/'))
     .pipe(reload({stream:true}));
});
