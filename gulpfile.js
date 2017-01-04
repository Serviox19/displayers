var gulp        = require('gulp'),
  concat        = require('gulp-concat'),
  sass          = require('gulp-sass'),
  plumber       = require('gulp-plumber'),
  watch         = require('gulp-watch'),
  minify_css    = require('gulp-minify-css'),



gulp.task('sass', function () {
  gulp.src('./public/css/index.sass')
  .pipe(plumber())
  .pipe(sass({ style: 'compressed' }))
  .pipe(minify_css())
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function () {
  gulp.watch('./public/**/*.sass', ['sass'])
});

gulp.task('default', ['watch', 'sass']);
