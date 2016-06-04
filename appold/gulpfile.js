var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');
var sass = require('gulp-sass');

var path = {
    HTML: 'index.html',
    IMAGES: 'images/*.*',
    ALL: ['components/**/*.js', 'pages/**/*.js', 'index.html'],
    JS: ['components/**/*.js', 'pages/**/*.js'],
    SASS: ['components/**/*.scss'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/src',
    DEST: 'dist'
};

gulp.task('default', ['watch', 'sass:watch']);

gulp.task('transform', function () {
    gulp.src(path.JS)
        .pipe(react())
        .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('scripts', function() {
    return gulp.src('./lib/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copy', function () {
    gulp.src([path.HTML, path.IMAGES])
        .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function () {
    gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('sass', function () {
    return gulp.src(path.SASS)
        .pipe(concat('style.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('sass:watch', function () {
    gulp.watch(path.SASS, ['sass']);
});