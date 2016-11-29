var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
//if node version is lower than v.0.1.2
require('es6-promise').polyfill();
var cssComb = require('gulp-csscomb');
var cmq = require('gulp-merge-media-queries');
var concat = require('gulp-concat');
gulp.task('sass',function(){
    gulp.src(['scss/addition-styles.scss'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoPrefixer('last 3 versions', 'last 3 iOS versions','safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(cssComb())
        .pipe(cmq({log:true}))
        .pipe(concat('addition-styles.css'))
        .pipe(gulp.dest('css/'))
});

gulp.task('default',function(){
    gulp.watch('scss/**/*.scss',['sass']);
});
