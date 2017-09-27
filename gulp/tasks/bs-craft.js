// bs-craft.js

var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('bs-craft', function() {
		// browser-sync task for starting the server.
	browserSync({
	    proxy: "craft.dev",
	    notify: false,
	    // Customize the BrowserSync console logging prefix
	    logPrefix: 'browserSyncLog',
	    // Run as an https by uncommenting 'https: true'
	    // Note: this uses an unsigned certificate which on first access
	    //       will present a certificate warning in the browser.
	    // https: true,
	  });
});

