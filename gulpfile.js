var gulp = require('gulp');

// JSHINT

var jshint = require('gulp-jshint');

gulp.task("jshint", function() {
  gulp.src("*.js")
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// SASS + rename + sourcemaps

var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('src/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
    }))
    .pipe(sourcemaps.write())
    .pipe(rename('out.css'))
    .pipe(gulp.dest('dist'));
});

// WATCHDOG

gulp.task("watch", function() {
  gulp.watch("src/*.js", ["jshint"]);
  gulp.watch("src/*.jsx", ["jshint"]);
  gulp.watch("src/*/*.scss", ["sass"]);
  gulp.watch("src/*.scss", ["sass"]);
});
