'use strict';

var gulp = require('gulp');
var p = require('gulp-load-plugins')();

var handle = function(err) {
  console.log(err); this.emit('end');
};

gulp.task('server', function() {
  return p.connect.server({
    root: 'dist',
    port: 8000,
    livereload: true
  });
});

gulp.task('sass', function() {
  return gulp.src('src/style/main.scss')
    .pipe(p.sass({outputStyle: 'compressed'}))
    .on('error', handle)
    .pipe(gulp.dest('dist'))
    .pipe(p.connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(p.uglify())
    .on('error', handle)
    .pipe(p.concat('main.js'))
    .on('error', handle)
    .pipe(gulp.dest('dist'))
    .pipe(p.connect.reload());
});

gulp.task('jade', function() {
  return gulp.src('src/views/index.jade')
    .pipe(p.jade())
    .on('error', handle)
    .pipe(gulp.dest('dist'))
    .pipe(p.connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('src/views/**/*.jade', ['jade']);
  gulp.watch('src/style/*.scss', ['sass']);
  gulp.watch('src/scripts/*.js', ['scripts']);
});


gulp.task('default', ['jade', 'sass', 'scripts', 'server', 'watch']);
