var gulp = require('gulp');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;

gulp.task('default', function (callback) {
    runSequence('build-bundle', 'production-files', 'production-images', callback);
});

gulp.task('build-bundle', function (cb) {
    exec('webpack --optimize-minimize', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    })
});

gulp.task('production-files', function () {
    return gulp.src(['app/bundle.js', 'app/index.html', 'app/style.css', 'app/favicon.ico'])
        .pipe(gulp.dest('../server/public'))
});

gulp.task('production-images', function () {
    return gulp.src('app/images/*')
        .pipe(gulp.dest('../server/public/images'))
});