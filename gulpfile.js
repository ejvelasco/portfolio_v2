'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');

gulp.task('js', () => {
    return (
        browserify('./public/js/main.js')
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/build/'))
        .pipe(livereload())
    );
});

gulp.task('pug-1', () => {
    gulp.src('./views/*.pug')
        .pipe(livereload());
});

gulp.task('pug-2', () => {
    gulp.src('./views/partials/*.pug')
        .pipe(livereload());
});

gulp.task('sass', () => {
  return gulp.src('./public/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/build/'))
    .pipe(livereload());
});

gulp.task('watch', () => { 
      livereload.listen();
      gulp.watch('./views/*.pug', ['pug-1']);
      gulp.watch('./views/partials/*.pug', ['pug-2']);
      gulp.watch('./public/js/*.js', ['js']);
      gulp.watch('./public/sass/*.scss', ['sass']);
});

gulp.task('default', ['js', 'sass', 'watch', 'pug-1', 'pug-2']);