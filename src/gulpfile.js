/**
 * Created by marcinp on 07.09.16.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create(); //auto-odswiezanie przegladarki


gulp.task('browserSync', function () {
    browserSync.init({
        server : {
            baseDir : './'
        }
    })
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('./*.*', browserSync.reload);
    gulp.watch('./js/*.js', browserSync.reload);
    gulp.watch('./controllers/*.js', browserSync.reload);
    gulp.watch('./views/*.*', browserSync.reload);
});
