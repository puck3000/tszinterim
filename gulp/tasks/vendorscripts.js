// vendorscripts
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;


gulp.task('vendorscripts', function() {
  return gulp.src('.tmp/*.*')
  .pipe(gulp.dest('dist/assets/theme/scripts/vendor/'))
  .pipe(reload({stream:true}));
});
