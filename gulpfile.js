const { src, dest, series, watch, task } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

// const jsonServer = require('gulp-json-srv');
// const server = jsonServer.create();

function scss() {
    return src('./styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./public/css'));
}

function es5() {
    return src('./scripts/index.js')
        .pipe(babel())
        .pipe(dest('./public/js/'))
}

// function jsonSrv() {
//     return src('./js/example.json')
//         .pipe(server.pipe());
// }

function watcher() {
    watch('./styles/scss/**/*.scss', scss);
    watch('./scripts/*.js', es5);
}

// exports.default = series(scss, watcher);
exports.default = series(es5, scss, watcher);