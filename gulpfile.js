////////////////////////////////////////////////
// Required
////////////////////////////////////////////////

var gulp = require("gulp"),
	uglify = require('gulp-uglify'),
	uglifycss = require('gulp-uglifycss'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	autoprefixer = require('autoprefixer-core'),
	nodemon = require('gulp-nodemon'),
	pug = require('gulp-pug'),
	postcss = require('gulp-postcss');

////////////////////////////////////////////////
// Scripts Task
////////////////////////////////////////////////
gulp.task("scss", function(){
	gulp.src('./precompile/scss/**/*.scss')
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglifycss())
		.pipe(postcss([ autoprefixer({browsers: ["> 0%"]})]))
		.pipe(gulp.dest('./client/css'))
		.pipe(reload({stream:true}));
});
gulp.task('pug', function(){
	return gulp.src('./precompile/*.pug')
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest("./"))
		.pipe(reload({stream:true}));
	})
////////////////////////////////////////////////
// HTML Task
////////////////////////////////////////////////
gulp.task('html', function(){
	gulp.src('./*.html')
		.pipe(reload({stream:true}));
})

////////////////////////////////////////////////
// Browser-Sync Task
////////////////////////////////////////////////
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: "./",
			browser: "google chrome"
		}
	})
})

////////////////////////////////////////////////
// Watch Task
////////////////////////////////////////////////
gulp.task("watch", function(){
	gulp.watch('./precompile/scss/*.scss', ["scss"])
	gulp.watch('./precompile/**/*.pug', ["pug"])
	gulp.watch('./*.html', ["html"]);

})
////////////////////////////////////////////////
// Default Task
////////////////////////////////////////////////
gulp.task("default", ["scss","browser-sync", "watch", "pug"]);
