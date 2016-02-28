var gulp = require( 'gulp' ),
	plumber = require( 'gulp-plumber' ), //Show errors in console
	uglify = require( 'gulp-uglify' ), //Compress files js and css
	concat = require( 'gulp-concat' ), //Concatenate files js
	stylus = require( 'gulp-stylus' ), //Stylus
	http = require( 'http' ), //Server http
	connect = require ( 'gulp-connect' ), //Server static
	livereload =  require ( 'gulp-livereload' ) //Syng with browser
;

gulp.task('stylus2css', function(){
	gulp.src('styles/alejandro-sosa.styl')
	.pipe(plumber())
	.pipe(stylus({ compress: true }))
	.pipe(gulp.dest('dist/css/'))
	.pipe(livereload());
});

gulp.task('pluginsjs', function(){
	gulp.src('scripts/**/*.js')
	.pipe(plumber())
	.pipe(concat('alejandro-sosa.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(livereload());
});

gulp.task('connectServer', function(){
	connect.server({
		root: 'dist',
		port: 8888,
		livereload: true
	});
});

gulp.task('reloadHTML', function(){
	gulp.src('./dist/*.html')
	.pipe(livereload('index.html'));
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch(['./dist/*.html'], ['reloadHTML'])
	gulp.watch('styles/alejandro-sosa.styl', ['stylus2css'])
	gulp.watch('scripts/**/*.js', ['pluginsjs']);
});

gulp.task('default', ['stylus2css', 'pluginsjs', 'connectServer', 'watch']);