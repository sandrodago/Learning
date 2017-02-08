var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
	console.log("Hello, Alex!");
});

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass()) //Using gulp-sass
		.pipe(gulp.dest('app/css'))
});

// Gulp watch syntax
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
})