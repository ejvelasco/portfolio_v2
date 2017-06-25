"use strict";

const gulp = require("gulp");
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const importCss = require("gulp-import-css");
const cleanCSS = require("gulp-clean-css");
const livereload = require("gulp-livereload");
const sass = require('gulp-sass');

gulp.task("js", function() {
    return (
        browserify("./public/js/portfolio.js")
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source("portfolio.js"))
        .pipe(gulp.dest("./public/build/"))
        .pipe(livereload())
    );
});

gulp.task("pug-1", function(){
    gulp.src("./views/*.pug")
        .pipe(livereload());
});

gulp.task("pug-2", function(){
    gulp.src("./views/partials/*.pug")
        .pipe(livereload());
});

gulp.task('sass', function () {
  return gulp.src('./public/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/build/'));
});

gulp.task("watch", function() {
      livereload.listen();
      gulp.watch("./views/*.pug", ["pug-1"]);
      gulp.watch("./views/partials/*.pug", ["pug-2"]);
      gulp.watch("./public/js/*.js", ["js"]);
      gulp.watch("./public/sass/*.sass", ["sass"]);
});

gulp.task("default", ["js", "sass", "watch", "pug-1", "pug-2"]);