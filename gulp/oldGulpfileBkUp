var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var autoprefixer = require('autoprefixer-stylus');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var twig = require('gulp-twig');
// var deploy = require('gulp-gh-pages');
var ghpages = require('gh-pages');
var path = require('path');



// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./dist"
        }
    });
});

// concat & minify imported css
gulp.task('minifyCSS', function() {
    gulp.src('dev/styles/cssImports/*')
    .pipe(concatCss("allCssImports.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dev/styles/'))
});

// styles task
gulp.task('styles',['minifyCSS'], function() {
    return gulp.src('dev/styles/**/*.styl')
      .pipe(stylus({
        'include css': true,
      	compress:true,
        use: [autoprefixer(), jeet()]
      }))
	   .pipe(gulp.dest('dist/assets/styles/'))
     .pipe(reload({stream:true}));

});


// Compile Twig
gulp.task('compile-twig', function() {
    return gulp.src('dev/twig/*.html')
      .pipe(twig())
      .pipe(gulp.dest('dist/'))
     .pipe(reload({stream:true}));
       
});

// // deploy to gh-pages task
// gulp.task('deploy', function () {
//     return gulp.src('dist/**/*')
//         .pipe(deploy());
// });

// deploy the dist folder to gh-pages
gulp.task("deploy", function(cb) {
  ghpages.publish(path.join(process.cwd(), "dist"), cb);
});


// default Task
gulp.task('default',['styles', 'compile-twig', 'browser-sync'], function () {
	gulp.watch("dev/styles/**/*.styl", ['styles']);
	gulp.watch("dev/twig/**.*", ['compile-twig']);
});