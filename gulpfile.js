var gulp = require("gulp"),
    concat = require("gulp-concat"),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    uglify = require("gulp-uglify");

gulp.task("scripts", function () {
    return gulp.src("blog/**/*.js")
        .pipe(concat("app.js"))
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify())
        .pipe(gulp.dest(""))
        .pipe(notify({message: "scripts task complete"}));
})