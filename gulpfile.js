// Include gulp
var gulp = require('gulp');

 // Include plugins
var concat = require('gulp-concat');
 // Concatenate JS Files

var jade = require('gulp-jade');
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('generador.js'))
      .pipe(gulp.dest('build/js'));
});

gulp.task('copy', function() {
    gulp.src(['src/js/*.js'])
      .pipe(gulp.dest('build/js'));
		gulp.src(['src/*.html']).pipe(gulp.dest('build/'));
});

gulp.task('jade',function(){
  return gulp.src('src/index.jade')
  .pipe(jade())
  .pipe(gulp.dest('build'))
});
gulp.task('watch', function() {
  gulp.watch('src/*.jade',['jade']);
   // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('src/scss/*.scss', ['sass']);
   // Watch image files
  gulp.watch('src/images/**/*', ['images']);
 });

 // Default Task
gulp.task('default', ['jade','scripts','watch']);
