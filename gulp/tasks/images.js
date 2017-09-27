var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('images', function() {
  return gulp.src('dev/img/**/*')
    .pipe(imagemin({
              progressive: true,
              svgoPlugins: [{removeViewBox: false}],
              use: [pngquant()]
          }))
    .pipe(gulp.dest('dist/assets/theme/img/'))
    .pipe(reload({stream:true}));
});
