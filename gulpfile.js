const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

//compile sass
function buildStyles() {
    return src('index.scss', './partials/*')
        .pipe(sass())
        .pipe(dest('css'))

}

//watch for any changes
function watchTask() {
    watch(['index.scss', './partials/*'], buildStyles)
}

exports.default = series(buildStyles, watchTask)