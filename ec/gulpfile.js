//1. 要使用gulp来建立任务
//  1.1 导入gulp包
var gulp = require('gulp');
var sass = require('gulp-sass');
var concatJS = require('gulp-concat');
// var uglify = require('gulp-uglify');
var babel = require("gulp-babel");
var connect = require('gulp-connect');


gulp.task('copy-index', function () {
    gulp.src('./index.html').pipe(gulp.dest('./dist'))
});

gulp.task('copy-html', function () {
    gulp.src('./src/html/*.html').pipe(gulp.dest('./dist/html'))
});
gulp.task('copy-api', function () {
    gulp.src('./api/*.php').pipe(gulp.dest('./dist/api'))
});

gulp.task('copy-lib', function () {
    gulp.src('./src/lib/**/*.*').pipe(gulp.dest('./dist/lib'))
});

gulp.task('copy-assets', function () {
    gulp.src('./assets/**/*.*').pipe(gulp.dest('./dist/assets'))
});
gulp.task('copy-template', function () {
    gulp.src('./src/template/**/*.*').pipe(gulp.dest('./dist/template'))
});

gulp.task('copy', ['copy-index', 'copy-html', 'copy-lib', 'copy-assets', 'copy-template', 'copy-api']);

//gulp没有能力编译sass，我们需要使用插件
gulp.task('sass', function () {
    gulp.src('./src/style/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', function () {
    //连接js(gulp-concat)，压缩js(gulp-uglify)
    gulp.src('./src/script/*.js')
        .pipe(concatJS('output.js'))
        .pipe(babel())
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('build', ['copy', 'sass', 'js']);


gulp.task('watch', function () {
    gulp.watch('./src/**/*.*', ['build'])
    gulp.watch('./dist/**/*.*', ['reload'])
});

gulp.task('reload', function () {
    gulp.src('./dist/**/*.html')
        .pipe(connect.reload())
});

gulp.task('server', function () {
    connect.server({
        root: './dist',
        livereload: true
    })
});

//当我们在命令行执行gulp命令，且后面没有跟任务名称时，
//会启动默认的任务，就是下面的default
gulp.task('default', ['server', 'watch']);