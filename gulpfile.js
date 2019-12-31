var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-Sync');
var autoprefixer = require('gulp-autoprefixer')
var reload = browserSync.reload;



gulp.task('sass',function(){
  gulp.src('scss/app.scss')
  .pipe(autoprefixer()) 
  .pipe(sass({
        includePaths:['scss']


   }))
   .pipe(gulp.dest('app/css'));
});

gulp.task('serve', ['sass'], function(){
  browserSync.init(["app/css/*.css","app/js/*.js","*.html"], {
      server:{baseDir:'app'
    }
  })

});

gulp.task('watch', ['sass','serve'], function(){
  gulp.watch(['scss/*scss'],['sass']);
}
);


gulp.task('default', ['watch']);