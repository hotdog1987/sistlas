var gulp = require('gulp');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
//var rename = require('gulp-rename');
var es = require('event-stream');

gulp.task('default', function() {
    return es.merge(
        // copy fonts
        gulp.src('public/app/font/*.ttf')
        .pipe(gulp.dest('public/dist/font')),
        
        // copy images
        gulp.src([
            'public/app/images/*.png',
            'public/app/images/*.gif',
            'public/app/images/**/*.png',
            'public/app/images/**/*.ico',
            'public/app/images/**/*.gif',
            'public/app/images/**/*.jpg'])
        .pipe(gulp.dest('public/dist/images')),
        
        // uglify user defined js
        gulp.src([
            'public/app/scripts/app.js',
            'public/app/scripts/**/*.js'
        ])
        .pipe(concat('scripts/sistlas.min.js'))
        .pipe(uglify()).pipe(gulp.dest('public/dist')),
        
        // uglify vendor js
        gulp.src([
            'public/bower/jquery/dist/jquery.js',
            'public/bower/angular/angular.js',
            'public/bower/angular-animate/angular-animate.js',
            'public/bower/angular-cookies/angular-cookies.js',
            'public/bower/angular-resource/angular-resource.js',
            'public/bower/angular-route/angular-route.js',
            'public/bower/angular-sanitize/angular-sanitize.js',
            'public/bower/angular-touch/angular-touch.js',
            'public/bower/angular-bootstrap/ui-bootstrap.js',
            'public/bower/angular-bootstrap/ui-bootstrap-tpls.js',
            'public/bower/ui-router/release/angular-ui-router.js',
            'public/bower/es5-shim/es5-sham.js',
            'public/bower/es5-shim/es5-shim.js',
            'public/bower/json3/lib/json3.js',
        ])
        .pipe(concat('scripts/vendor.min.js'))
        .pipe(uglify()).pipe(gulp.dest('public/dist')),
        
        // cssmin on user defined css
        gulp.src('public/app/stylesheets/*.css')
        .pipe(concat('stylesheets/styles.min.css'))
        .pipe(cssmin()).pipe(gulp.dest('public/dist')),
        
        // cssmin on vendor css
        gulp.src([
            'public/bower/bootstrap/dist/css/bootstrap.css',
            'public/bower/bootstrap/dist/css/bootstrap-theme.css'
            ])
        .pipe(concat('stylesheets/vendor.min.css'))
        .pipe(cssmin()).pipe(gulp.dest('public/dist')),
        
        // htmlmin
        gulp.src('public/app/index.html').pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public/dist')),
        gulp.src('public/app/partials/*.html').pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public/dist/partials')),
        gulp.src('public/app/partials/leafs/*.html').pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public/dist/partials/leafs')));
});