var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var plumber = require('gulp-plumber');

gulp.task('build-es6', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-commonjs', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(to5(assign({}, compilerOptions, {modules:'common'})))
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

// TODO: Concatenate
gulp.task('build-global', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(to5(assign({}, compilerOptions, {modules:'ignore'})))
    .pipe(gulp.dest(paths.output + 'global'));
});

gulp.task('build-amd', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(to5(assign({}, compilerOptions, {modules:'amd'})))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-system', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['styles', 'html', 'images'],
    ['build-es6', 'build-commonjs', 'build-amd', 'build-system', 'build-global'],
    callback
  );
});
