var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
// var coffee      = require('gulp-coffee');
var sass = require('gulp-sass');
// var notify      = require('gulp-notify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var rename = require('gulp-rename');
// var connectPHP = require('gulp-connect-php');

// ////////////////////////////////////////////////
// Пути к исходным файлам
// они немного изменились
// ///////////////////////////////////////////////
var paths = {
  html: ['www/*.html'],
  php: ['www/*.php'],
  css: ['www/sass/*.sass'],
  script: ['www/js/*.js']
};

// ////////////////////////////////////////////////
// SASS - to min.css
// ///////////////////////////////////////////////
gulp.task('mincss', function () {
  return gulp.src(paths.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('www/css'))
    .pipe(reload({
      stream: true
    }));
});

// ////////////////////////////////////////////////
// HTML - watch
// ///////////////////////////////////////////////
gulp.task('html', function () {
  gulp.src(paths.html)
    .pipe(reload({
      stream: true
    }));
});

// ////////////////////////////////////////////////
// PHP - watch
// ///////////////////////////////////////////////
gulp.task('php', function () {
  gulp.src(paths.php)
    .pipe(reload({
      stream: true
    }));
});
// ////////////////////////////////////////////////
// JS - watch
// ///////////////////////////////////////////////
gulp.task('scripts', function () {
  gulp.src(paths.script)
    .pipe(reload({
      stream: true
    }));
});


// ////////////////////////////////////////////////
// Browser-Sync
// // /////////////////////////////////////////////
gulp.task('browserSync', function () {
  browserSync({
    proxy: 'test1.ru',
    port: 8080
  });
});

// /////////////////////////////////////////////////
// PHP
// ////////////////////////////////////////////////
// gulp.task('php', function(){
//   connectPHP.server({ base: './', keepalive:true, hostname: 'localhost', port:8080, open: false});
// });



gulp.task('watcher', function () {
  gulp.watch(paths.css, ['mincss']);
  gulp.watch(paths.script, ['scripts']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.php, ['php']);
});

gulp.task('default', ['watcher', 'browserSync']);