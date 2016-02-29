var gulp       = require( 'gulp' ),
    plumber    = require( 'gulp-plumber' ),     // Show errors in console
    uglify     = require( 'gulp-uglify' ),      // Compress files js and css
    concat     = require( 'gulp-concat' ),      // Concatenate files js
    stylus     = require( 'gulp-stylus' ),      // Stylus
    http       = require( 'http' ),             // Server http
    connect    = require( 'gulp-connect' ),     // Server static
    livereload = require( 'gulp-livereload' ),  // Syng with browser
    includer   = require( 'gulp-htmlincluder' ) // Html Includer (Code or components)
;

gulp.task('htmlIncluder', function(){
  gulp.src('html/*.html')
      .pipe(includer())
      .pipe(gulp.dest('dist/'));
});

gulp.task('stylus2css', function(){
  gulp.src('styles/alejandro-sosa.styl')
      .pipe(plumber())
      .pipe(stylus({ compress: false }))
      .pipe(gulp.dest('dist/css/'))
      .pipe(livereload());
});

gulp.task('pluginsjs', function(){
  gulp.src('scripts/**/*.js')
      .pipe(plumber())
      .pipe(concat('alejandro-sosa.js'))
//      .pipe(uglify())
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
  gulp.src('dist/')
      .pipe(livereload('dist/index.html'));
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch(['./html/*.html'], ['htmlIncluder'])
  gulp.watch(['./html/*.html'], ['reloadHTML'])
  gulp.watch('styles/alejandro-sosa.styl', ['stylus2css'])
  gulp.watch('scripts/**/*.js', ['pluginsjs']);
});

gulp.task('default', [ 'htmlIncluder', 'stylus2css', 'pluginsjs', 'connectServer', 'watch']);
