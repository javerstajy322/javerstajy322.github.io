var gulp        = require('gulp');
var minifyCss   = require('gulp-minify-css');
// var coffee      = require('gulp-coffee');
var sass        = require('gulp-sass');
var notify      = require('gulp-notify');
var browserSync = require('browser-sync');
var rename      = require('gulp-rename');
var reload      = browserSync.reload;
// var connectPHP = require('gulp-connect-php');

// ////////////////////////////////////////////////
// Пути к исходным файлам
// они немного изменились
// ///////////////////////////////////////////////
var paths = {
  html:['app/*.html'],
  css:['app/sass/*.sass'],
  // script:['./*.coffee']
};

gulp.task('mincss', function(){
  return gulp.src(paths.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));
});

// ////////////////////////////////////////////////
// HTML
// ///////////////////////////////////////////////
gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

// ////////////////////////////////////////////////
// Browser-Sync
// // /////////////////////////////////////////////
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "app/"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

// /////////////////////////////////////////////////
// PHP
// ////////////////////////////////////////////////

// gulp.task('php', function(){
//   connectPHP.server({ base: './', keepalive:true, hostname: 'localhost', port:8080, open: false});
// });

// gulp.task('scripts', function(){
//   return gulp.src(paths.script)
//     .pipe(coffee())
//     .pipe(gulp.dest('js'))
//     .pipe(reload({stream:true}));
// });

gulp.task('watcher',function(){
  gulp.watch(paths.css, ['mincss']);
  // gulp.watch(paths.script, ['scripts']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watcher', 'browserSync']);
