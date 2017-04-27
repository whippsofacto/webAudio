var gulp = require('gulp'),
    webserver = require('gulp-webserver')
//webserver - open on load port 3000
gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            port: 3300,
            open: true
        }));
});


//restart tasks when something changes in the following dirs
gulp.task('watch',function(){
  gulp.watch('./index.html');
  gulp.watch('./script.js');

});


gulp.task('default', ['watch','webserver']);
