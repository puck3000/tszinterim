var gulp = require('gulp');
    browserSync = require('browser-sync');
    reload      = browserSync.reload;
    stylus = require('gulp-stylus');
    jeet = require('jeet');
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost');
    poststylus = require('poststylus');

// styles task
gulp.task('styles',['minifyCSS'], function() {
    return gulp.src('dev/styles/main.styl')
      .pipe(stylus({
        'include css': true,
      	compress:true,
        use: [jeet(), poststylus([
            'lost',
            'autoprefixer'
            ])
          ]
      }))
	   .pipe(gulp.dest('dist/assets/theme/styles/'))
     .pipe(reload({stream:true}));

});
