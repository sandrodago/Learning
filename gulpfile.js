var gulp = require('gulp'); // get the gulp commands
var sass = require('gulp-sass'); // be able to translat scss to css
var browserSync = require('browser-sync').create(); // get the browser sync service

gulp.task('hello', function() {
	console.log("Hello, Alex!");
});

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass()) //Using gulp-sass
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

// Gulp watch syntax, allows function to keep running on file-save.
gulp.task('watch', ['browserSync', 'sass'], function(){ 
  // browserSync is in an array of tasks.
  // that must be completed before watch is allowed to run.
  gulp.watch('app/scss/**/*.scss', ['sass']);  
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
  // Other watchers
})

// browser sync needs to know where the server is to continuously spin the page.
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})